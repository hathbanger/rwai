'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Quote {
  quote: string;
  author: string;
  title: string;
}

interface AnimatedQuoteProps {
  quotes: Quote[];
  highlightPhrase?: string;
  highlightColor?: string;
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function AnimatedQuote({ 
  quotes, 
  highlightPhrase = "exponentially more GPUs",
  highlightColor = "text-orange-500",
  autoRotate = true,
  rotationInterval = 5000
}: AnimatedQuoteProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [words, setWords] = useState<string[]>([]);
  const [isLineAnimating, setIsLineAnimating] = useState(false);
  const [lineAnimationMode, setLineAnimationMode] = useState<'entry' | 'idle' | 'exit'>('entry');
  const [isPaused, setIsPaused] = useState(false);
  const lineOffsetRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lineAnimationDuration = 2000; // Duration of line animation in ms
  
  // Auto-rotate quotes
  useEffect(() => {
    if (autoRotate && !isPaused) {
      // Quote rotation
      intervalRef.current = setInterval(() => {
        if (!isAnimating) {
          const nextIndex = (currentQuoteIndex + 1) % quotes.length;
          changeQuote(nextIndex);
        }
      }, rotationInterval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotate, currentQuoteIndex, isAnimating, isPaused, quotes.length, rotationInterval]);
  
  // Split the current quote into words when the quote changes
  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex].quote;
    setWords(currentQuote.split(' '));
  }, [currentQuoteIndex, quotes]);
  
  // Initial line animation on mount
  useEffect(() => {
    // Start with entry animation
    setLineAnimationMode('entry');
    
    // After entry animation completes, switch to idle
    const timer = setTimeout(() => {
      setLineAnimationMode('idle');
    }, lineAnimationDuration);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle quote transition
  const changeQuote = (index: number) => {
    if (isAnimating || index === currentQuoteIndex) return;
    
    setIsAnimating(true);
    
    // Start exit animation for lines
    setLineAnimationMode('exit');
    
    // Wait for exit animation, then change quote and start entry animation
    setTimeout(() => {
      setCurrentQuoteIndex(index);
      setLineAnimationMode('entry');
      
      // After entry animation completes, switch to idle
      setTimeout(() => {
        setLineAnimationMode('idle');
        setIsAnimating(false);
      }, lineAnimationDuration);
    }, lineAnimationDuration);
  };
  
  // Get unique line positions based on the current quote index
  const getLinePositions = (index: number) => {
    // Create different line position sets for each quote
    const positionSets = [
      // Position set for quote 0
      {
        topLines: [
          { left: 0, width: 300 },
          { right: 0, width: 250 },
          { left: '45%', width: 100 },
          { left: '30%', width: 180 },
          { right: '25%', width: 200 }
        ],
        middleLines: [
          { left: 0, width: 220 },
          { right: 0, width: 240 },
          { left: '20%', width: 180 }
        ],
        bottomLines: [
          { left: 0, width: 280 },
          { right: 0, width: 220 },
          { left: '55%', width: 110 },
          { left: '35%', width: 160 }
        ]
      },
      // Position set for quote 1
      {
        topLines: [
          { left: '10%', width: 250 },
          { right: '10%', width: 200 },
          { left: '60%', width: 120 },
          { left: '20%', width: 150 },
          { right: '35%', width: 180 }
        ],
        middleLines: [
          { left: '15%', width: 200 },
          { right: '15%', width: 220 },
          { left: '40%', width: 160 }
        ],
        bottomLines: [
          { left: '5%', width: 260 },
          { right: '5%', width: 240 },
          { left: '65%', width: 100 },
          { left: '25%', width: 180 }
        ]
      },
      // Position set for quote 2
      {
        topLines: [
          { left: '5%', width: 280 },
          { right: '20%', width: 230 },
          { left: '50%', width: 90 },
          { left: '25%', width: 170 },
          { right: '15%', width: 190 }
        ],
        middleLines: [
          { left: '10%', width: 210 },
          { right: '25%', width: 230 },
          { left: '35%', width: 170 }
        ],
        bottomLines: [
          { left: '15%', width: 270 },
          { right: '10%', width: 210 },
          { left: '60%', width: 120 },
          { left: '30%', width: 150 }
        ]
      }
    ];
    
    // Use modulo to handle more quotes than position sets
    return positionSets[index % positionSets.length];
  };
  
  // Get current line positions
  const currentPositions = getLinePositions(currentQuoteIndex);
  
  // Get the highlight phrase for the current quote
  const getHighlightPhraseForQuote = (quoteText: string): string => {
    // Default phrases to highlight for each quote if they contain these terms
    const defaultPhrases = [
      "exponentially more GPUs",
      "insanely large GPU fleet",
      "scale of compute",
      "GPU capacities",
      "scaling GPU fleets",
      "hundreds or even thousands of times greater",
      "dramatically more GPUs"
    ];
    
    // Find the first phrase that exists in the quote
    for (const phrase of defaultPhrases) {
      if (quoteText.includes(phrase)) {
        return phrase;
      }
    }
    
    // If no match, return the default
    return highlightPhrase;
  };
  
  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsPaused(true);
  };
  
  const handleTouchEnd = () => {
    setIsPaused(false);
  };
  
  // Get line animation based on mode and position
  const getLineAnimation = (pos: any, isHorizontal: boolean = true) => {
    const axis = isHorizontal ? 'x' : 'y';
    const fromLeft = pos.left !== undefined;
    
    switch (lineAnimationMode) {
      case 'entry':
        // Entry animation - from outside to center with smooth deceleration
        return {
          [axis]: fromLeft 
            ? ['-120%', '0%'] 
            : ['120%', '0%']
        };
      case 'exit':
        // Exit animation - from center to outside with rapid acceleration
        return {
          [axis]: fromLeft 
            ? ['0%', '-150%'] 
            : ['0%', '150%']
        };
      case 'idle':
      default:
        // More noticeable idle animation with smooth transitions
        return {
          [axis]: fromLeft 
            ? ['0%', '3%', '-3%', '0%'] 
            : ['0%', '-3%', '3%', '0%']
        };
    }
  };
  
  // Get line animation transition based on mode
  const getLineTransition = (index: number, mode: 'entry' | 'idle' | 'exit') => {
    switch (mode) {
      case 'entry':
        return { 
          duration: 1.6 + index * 0.08, 
          ease: [0.25, 0.1, 0.25, 1.0], // cubic-bezier for smoother entry
          delay: index * 0.06 
        };
      case 'exit':
        return { 
          duration: 1.2 + index * 0.05, // Faster exit
          ease: [0.36, 0, 0.66, -0.56], // Dramatic ease-out with overshoot
          delay: index * 0.03 // Faster staggering
        };
      case 'idle':
      default:
        return { 
          duration: 20 + index * 2, 
          ease: [0.37, 0, 0.63, 1], // pronounced ease-in-out for idle
          repeat: Infinity, 
          repeatType: "mirror" 
        };
    }
  };
  
  return (
    <div 
      className="relative w-full border-b border-gray-200 dark:border-gray-800 pb-16 mt-12 mb-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Horizontal lines - Top */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`top-lines-${currentQuoteIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: lineAnimationMode === 'exit' ? 0.5 : 0.8, 
            ease: lineAnimationMode === 'exit' ? [0.36, 0, 0.66, -0.56] : [0.25, 0.1, 0.25, 1.0]
          }}
          className="absolute top-0 left-0 right-0 h-32"
        >
          {currentPositions.topLines.map((pos, i) => (
            <div 
              key={`top-${i}`} 
              className="absolute -top-16 h-1 overflow-visible"
              style={{ 
                left: pos.left !== undefined ? pos.left : 'auto', 
                right: pos.right !== undefined ? pos.right : 'auto',
                top: `${-16 - i * 4}px`
              }}
            >
              <div 
                className="absolute h-full z-10"
                style={{ 
                  left: pos.left !== undefined ? 0 : 'auto', 
                  right: pos.right !== undefined ? 0 : 'auto',
                  width: `${pos.width}px`
                }}
              >
                <motion.div 
                  className="bg-orange-500 w-full h-full"
                  initial={{ x: pos.left !== undefined ? '-120%' : '120%' }}
                  animate={getLineAnimation(pos)}
                  transition={getLineTransition(i, lineAnimationMode)}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Horizontal lines in the middle section */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`middle-lines-${currentQuoteIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: lineAnimationMode === 'exit' ? 0.5 : 0.8, 
            ease: lineAnimationMode === 'exit' ? [0.36, 0, 0.66, -0.56] : [0.25, 0.1, 0.25, 1.0]
          }}
          className="absolute top-1/4 left-0 right-0 h-96"
        >
          {currentPositions.middleLines.map((pos, i) => (
            <div 
              key={`middle-${i}`} 
              className="absolute h-1 overflow-visible"
              style={{ 
                left: pos.left !== undefined ? pos.left : 'auto', 
                right: pos.right !== undefined ? pos.right : 'auto',
                top: `${25 + i * 30}%`
              }}
            >
              <div 
                className="absolute h-full z-10"
                style={{ 
                  left: pos.left !== undefined ? 0 : 'auto', 
                  right: pos.right !== undefined ? 0 : 'auto',
                  width: `${pos.width}px`
                }}
              >
                <motion.div 
                  className="bg-orange-500 w-full h-full"
                  initial={{ x: pos.left !== undefined ? '-120%' : '120%' }}
                  animate={getLineAnimation(pos)}
                  transition={getLineTransition(i + 3, lineAnimationMode)}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Horizontal lines - Bottom */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`bottom-lines-${currentQuoteIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: lineAnimationMode === 'exit' ? 0.5 : 0.8, 
            ease: lineAnimationMode === 'exit' ? [0.36, 0, 0.66, -0.56] : [0.25, 0.1, 0.25, 1.0]
          }}
          className="absolute bottom-0 left-0 right-0 h-32"
        >
          {currentPositions.bottomLines.map((pos, i) => (
            <div 
              key={`bottom-${i}`} 
              className="absolute h-1 overflow-visible"
              style={{ 
                left: pos.left !== undefined ? pos.left : 'auto', 
                right: pos.right !== undefined ? pos.right : 'auto',
                bottom: `${-8 - i * 4}px`
              }}
            >
              <div 
                className="absolute h-full z-10"
                style={{ 
                  left: pos.left !== undefined ? 0 : 'auto', 
                  right: pos.right !== undefined ? 0 : 'auto',
                  width: `${pos.width}px`
                }}
              >
                <motion.div 
                  className="bg-orange-500 w-full h-full"
                  initial={{ x: pos.left !== undefined ? '-120%' : '120%' }}
                  animate={getLineAnimation(pos)}
                  transition={getLineTransition(i + 6, lineAnimationMode)}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Quote content - fixed height container */}
      <div className="pt-20 pb-16 px-8 md:px-16 text-center">
        <div className="text-4xl md:text-5xl font-serif text-orange-500 mb-4 md:mb-6">"</div>
        
        <div className="h-[180px] md:h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              className="text-lg md:text-xl lg:text-2xl font-light leading-tight mb-6 md:mb-8 text-gray-900 dark:text-white max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: lineAnimationMode === 'exit' ? 0.4 : 0.8, 
                ease: lineAnimationMode === 'exit' ? [0.36, 0, 0.66, -0.56] : [0.25, 0.1, 0.25, 1.0]
              }}
            >
              {words.map((word, i) => {
                const currentHighlightPhrase = getHighlightPhraseForQuote(quotes[currentQuoteIndex].quote);
                const isHighlighted = currentHighlightPhrase.split(' ').some(part => 
                  word.toLowerCase().includes(part.toLowerCase()) && 
                  currentHighlightPhrase.toLowerCase().includes(word.toLowerCase())
                );
                
                return (
                  <motion.span
                    key={`${currentQuoteIndex}-${i}`}
                    className="inline-block mx-[0.15rem]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ 
                      duration: lineAnimationMode === 'exit' ? 0.4 : 0.6, 
                      delay: lineAnimationMode === 'entry' ? 0.6 + i * 0.025 : i * 0.015, // Faster exit staggering
                      ease: lineAnimationMode === 'exit' ? [0.36, 0, 0.66, -0.56] : [0.25, 0.1, 0.25, 1.0]
                    }}
                  >
                    {isHighlighted ? (
                      <span className={`font-medium ${highlightColor}`}>{word}</span>
                    ) : word}
                  </motion.span>
                );
              })}
            </motion.p>
          </AnimatePresence>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`attribution-${currentQuoteIndex}`}
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ 
              duration: lineAnimationMode === 'exit' ? 0.35 : 0.6, 
              delay: lineAnimationMode === 'entry' ? 1.0 : 0.02,
              ease: lineAnimationMode === 'exit' ? [0.36, 0, 0.66, -0.56] : [0.25, 0.1, 0.25, 1.0]
            }}
          >
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{quotes[currentQuoteIndex].author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{quotes[currentQuoteIndex].title}</p>
            </div>
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 
# Google Analytics Implementation Requirements

## Overview
This document outlines the requirements for implementing Google Analytics tracking via Google Tag Manager for the RWAi website. It covers both the code-side implementation and the necessary configuration in the Google Analytics and Tag Manager dashboards.

## Code Implementation Status

Current Implementation:
- GA4 direct implementation (gtag.js) with ID G-3RT06YPS1M ✅
- GTM container code (GTM-KBSN67QN) implemented in layout.tsx ✅
  - GTM script in head ✅
  - GTM noscript iframe in body ✅
- Both GA4 and GTM running simultaneously (needs cleanup) ⚠️

Implementation Status:
1. **Analytics Setup**
   - GA4 Property Created ✅
   - GA4 Measurement ID Configured (G-3RT06YPS1M) ✅
   - GTM Container Created (GTM-KBSN67QN) ✅

2. **Tag Manager Setup**
   - GTM Base Code Implementation ✅
   - GA4 Configuration Tag in GTM Dashboard ❌
   - Cross-Domain Tracking Configuration ❌

3. **Event Tracking**
   - Page Views (currently via direct gtag.js) ✅
   - Whitelist Form Submission ❌
   - Form Abandonment ❌
   - Navigation Clicks ❌

4. **Domain Configuration**
   - Main Domain Setup ✅
   - App Subdomain Setup ❌
   - Cross-Domain Linking ❌

Next Immediate Actions (In Order):
1. Set up GA4 Configuration tag in GTM Dashboard ❌
   - Use existing Measurement ID: G-3RT06YPS1M
   - Configure with "Initialization - All Pages" trigger
2. Test GTM-based GA4 tracking in preview mode ❌
3. Remove direct gtag.js implementation ❌
4. Implement cross-domain tracking ❌

Critical Note: We currently have both direct GA4 implementation and GTM running. This could cause duplicate tracking. We should:
1. First set up GA4 in GTM dashboard
2. Verify it's working in preview mode
3. Then remove the direct gtag.js implementation

## Google Tag Manager Dashboard Setup

### 1. Account and Container Setup
- **Requirement**: Configure GTM container for tracking
- **Implementation Steps**:
  - Log in to Google Tag Manager (https://tagmanager.google.com/)
  - Verify container GTM-KBSN67QN is properly set up
  - Create workspace for development if not already exists
  - Configure user permissions for team members

### 2. Google Analytics Connection
- **Requirement**: Connect GA4 property to GTM
- **Implementation Steps**:
  - Create a new GA4 property in Google Analytics ✅
  - Note the Measurement ID (G-3RT06YPS1M) ✅
  - In GTM, create a Google Analytics: GA4 Configuration tag ❌
    - Replace direct gtag.js implementation with GTM
    - Current implementation uses direct gtag.js script which should be removed
  - Enter the Measurement ID ❌
  - Set to fire on "Initialization - All Pages" trigger ❌
    - This ensures GA4 initializes before other tags and after consent if required
    - Using "Initialization - All Pages" instead of regular "All Pages" prevents timing issues

Note: Currently using direct gtag.js implementation. Need to migrate to GTM for better management and flexibility.

### 3. Cross-Domain Tracking Configuration ❌
- **Requirement**: Track users across main domain and app subdomain
- **Implementation Steps**:

  1. **GA4 Property Configuration**:
    - Go to GA4 Admin > Data Streams
    - Add two data streams:
      1. Main domain (rwai.xyz)
      2. App subdomain (app.rwai.xyz)
    - Note both Measurement IDs

  2. **GTM Configuration Tag Setup**:
    - In your GA4 Configuration tag:
      ```javascript
      Fields to Set:
      cookie_domain: auto
      allow_google_signals: true
      ```
    - Add these domains to internal traffic settings:
      ```
      rwai.xyz
      app.rwai.xyz
      *.rwai.xyz
      ```

  3. **Domain Configuration**:
    - In GA4 Admin > Property Settings:
      - Add both domains to "List unwanted referrals"
      - Enable "Session timeout when exceeding referral exclusion list"

  4. **GTM Variables Setup**:
    - Create constant variable "Main Domain": rwai.xyz
    - Create constant variable "App Domain": app.rwai.xyz
    - Create custom JavaScript variable for domain detection:
      ```javascript
      function() {
        return window.location.hostname;
      }
      ```

  5. **Link Decoration**:
    - Enable cross-domain measurement in GA4:
      - Admin > Data Streams > [Select Stream] > More Tagging Settings
      - Enable "Configure your domains"
      - Add both domains
    - Ensure all internal links between domains use:
      ```html
      <a href="https://app.rwai.xyz" data-gtm-link="cross-domain">
      ```

  6. **Testing Checklist**:
    - ❌ Verify cookie persistence between domains
    - ❌ Check session continuation when switching domains
    - ❌ Validate referral data exclusion
    - ❌ Test user journey tracking across domains

Note: This setup is critical for tracking the complete user journey, especially for users who start on the main site and move to the app subdomain for the whitelist form.

## Tracking Implementation in GTM

### 1. Page View Tracking
- **Requirement**: Track all page views across the site
- **Implementation Steps**:
  - Create a GA4 Configuration tag (already covered above)
  - Configure page view parameters to include:
    - Page title: `{{Page Title}}`
    - Page location: `{{Page URL}}`
    - Page path: `{{Page Path}}`

### 2. Whitelist Form Conversion Tracking
- **Requirement**: Track form submissions as conversions
- **Implementation Steps**:
  - Create a Custom Event trigger:
    - Event name: `whitelist_submission`
  - Create a GA4 Event tag:
    - Configuration tag: Select your GA4 config tag
    - Event name: `conversion`
    - Parameters:
      - conversion_type: `whitelist_form`
      - form_id: `{{DLV - formId}}` (DataLayer Variable)
  - Set up a conversion event in GA4 property for this event

### 3. User Interaction Tracking
- **Requirement**: Track key user interactions
- **Implementation Steps**:
  - Create Click triggers for:
    - Navigation menu items (CSS selector: navigation elements)
    - CTA buttons (CSS selector: primary buttons)
    - External links (Configure link click trigger with proper conditions)
  - Create GA4 Event tags for each interaction type

### 4. Form Abandonment Tracking
- **Requirement**: Track incomplete form submissions
- **Implementation Steps**:
  - Create timer trigger that fires after 30 seconds on whitelist page
  - Create conditions to check if form has inputs but wasn't submitted
  - Configure GA4 Event tag for form abandonment event

## Variables Configuration in GTM

### 1. DataLayer Variables
- **Requirement**: Extract data from dataLayer pushes
- **Implementation Steps**:
  - Create DataLayer variable for `formId`
  - Create DataLayer variable for `event`

### 2. Custom Variables
- **Requirement**: Create helpful custom variables for tracking
- **Implementation Steps**:
  - Create page section variable (JavaScript to determine site section)
  - Create user login status variable (check for auth state)
  - Create theme preference variable (extract from localStorage)

## GA4 Dashboard Configuration

### 1. Conversion Setup
- **Requirement**: Configure conversion events in GA4
- **Implementation Steps**:
  - In GA4, navigate to Configure > Events
  - Create a new conversion event
  - Enter event name: `conversion`
  - Save configuration
  - Enable enhanced measurement for the event

### 2. Custom Dimensions
- **Requirement**: Create custom dimensions for better analysis
- **Implementation Steps**:
  - In GA4, navigate to Configure > Custom definitions
  - Create custom dimensions for:
    - Page section
    - User login status
    - Theme preference
  - Set scope appropriately (user or session level)

### 3. Reporting Configuration
- **Requirement**: Set up custom reports for key metrics
- **Implementation Steps**:
  - Create exploration for conversion funnel analysis
  - Set up custom report for whitelist form completion rate
  - Configure dashboard with key performance indicators

## Testing and Validation

### 1. GTM Preview Mode
- **Requirement**: Test all tags before publishing
- **Implementation Steps**:
  - Use GTM preview mode to test configuration
  - Navigate through site and verify tags fire correctly
  - Submit test whitelist form and confirm conversion tracking
  - Test on both main domain and app subdomain

### 2. GA4 DebugView
- **Requirement**: Verify events reach GA4 correctly
- **Implementation Steps**:
  - Enable GA4 DebugView
  - Perform key actions on the site
  - Verify events appear in DebugView with correct parameters

### 3. Real-time Reports
- **Requirement**: Final validation of implementation
- **Implementation Steps**:
  - Check real-time reports in GA4
  - Confirm page views and events are recording properly
  - Verify conversion tracking with test submissions

## Privacy Compliance

### 1. Consent Mode Configuration
- **Requirement**: Implement privacy-compliant tracking
- **Implementation Steps**:
  - Configure consent mode variables in GTM
  - Set up consent checks before tracking
  - Implement cookie banner if required for your target regions

### 2. Data Retention Configuration
- **Requirement**: Configure appropriate data retention periods
- **Implementation Steps**:
  - In GA4 admin, set data retention period (14 months recommended)
  - Configure when user data should be deleted

## Next Steps After Implementation

1. Publish GTM configuration when testing confirms correct implementation
2. Monitor analytics data for first week to ensure proper collection
3. Create custom reports based on collected data
4. Optimize tagging based on initial findings
5. Set up regular reporting schedule for stakeholders 
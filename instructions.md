# Project Overview: Revue Website

## Project Name: Revue Website
- **Platform**: Web-based platform, developed using NextJS in Typescript.
- **Purpose**: To serve as a gateway for brands and creators to learn about Revue's offerings, view content creation tips, and log in to access more advanced features.

## Goal

The website aims to be an informational platform showcasing Revue's purpose, vision, and how the app can bridge the gap between creators and brands. The website will feature a simple login and sign-up flow (using Google authentication) and allow users to scan QR codes once logged in. It will also feature a blog section with tips for creators, tips for brands, success stories, and industry news. The website should be visually appealing with clean and modern design along with animations.

## Core Functionality

1. **Home Page**:
   - A section that introduces Revue as a platform for connecting creators with brands.
   - Highlight Revue's vision and mission with engaging visuals.
   - Overview of how Revue helps creators and brands:
     - Creators: Access to brand deals and promotion opportunities.
     - Brands: A way to discover and engage influencers efficiently.

2. **Blog Section**:
   - A blog repository that covers topics related to content creation and brand-building.
   - This section will feature articles on strategies for creators to grow, tips for brands to collaborate with influencers, and success stories.

3. **Login/Sign-up Flow**:
   - Google OAuth will be integrated to allow users to sign up and log in.
   - The login/sign-up flow should be simple and intuitive, enabling a seamless experience for users.

4. **QR Code Scanner (Post-Login)**:
   - After logging in, users will be able to scan QR codes. This can be useful for event attendance or linking in-app features to the web platform.
   - Ensure QR scanning functionality is easily accessible on the dashboard after login.

5. **Footer Section**:
   - Links to About Us, Terms of Service, Privacy Policy, Help Center, and Contact Information.

6. **Responsive Design**:
   - Ensure the website works smoothly on both desktop and mobile browsers.

## Technical Stack

- **Frontend**: NextJS in Typescript for building a cross-platform responsive interface.
- **Backend**: Integrate with the existing backend to support Google OAuth using Firebase.
- **Authentication**: Google OAuth API.
- **QR Scanner**: A custom QR scanner component.

# Project Requirements Document (PRD)

## 1. Introduction

Revue is a platform that bridges the gap between creators and brands, providing a seamless connection to foster successful collaborations. This website will serve as an informative landing page with simple functionality for users to log in and access QR scanning.

## 2. Goals and Objectives

- Present Revue's vision and offerings to both creators and brands.
- Provide an easy-to-use Google authentication flow.
- Allow users to scan QR codes after logging in.
- Serve as a hub for blogs related to content creation and brand-building.
- Have a clean and modern design with animations.


## 4. Scope

### 4.1 Functional Requirements

- **Landing Page**:
  - Show a brief introduction to Revue's services.
  - Vision and mission section with engaging content.
  - Highlights on how Revue helps creators and brands.
  - A CTA to download the app or sign up.

- **Blog Section**:
  - A list of blog posts related to content creation, influencer marketing, and brand partnerships.
  - Easy navigation with categories and search filters.

- **Login/Sign-up**:
  - Implement Google OAuth login/sign-up.
  - Allow returning users to easily log in.
  - A smooth onboarding experience for new users.

- **Post-Login Dashboard**:
  - QR code scanning functionality for logged-in users.
  - Accessible right after the login process.

- **Footer Section**:
  - Links to About Us, Terms of Service, Privacy Policy, Help Center, and Contact Information.

### 4.2 Non-functional Requirements

- **Responsiveness**:
  - The website should be fully responsive and optimized for both desktop and mobile browsers.
- **Visuals**:
  - The website should have a clean and modern design with animations.
- **Animations**:
  - The website should have animations to enhance the user experience.
- **Performance**:
  - The website must load quickly, with a target page load time of under 2 seconds.
- **Security**:
  - Secure user data during login and after, following industry-standard practices for encryption and token management.
- **Scalability**:
  - The architecture must support the easy addition of features in the future, such as new login methods or expanded blog categories.
- **SEO**:
  - The website should be SEO optimized.
  

## 5. User Stories

### 5.1 As a visitor

  - I want to understand the purpose of Revue, so I can determine if it's a good fit for me (brand/creator).
  - I want to read blog posts to learn about content creation and brand-building.

### 5.2 As a user

- I want to sign up using my Google account, so I don't have to remember additional passwords.
- I want to scan a QR code after logging in, so I can easily participate in events or in-app functionalities.

### 5.3 As a returning user

- I want to log in quickly using my Google account and access the dashboard with QR scanning functionality.

## 6. Wireframes & UI Mockups

### 6.1 Homepage

- Header: Logo, Navigation Links (About Us, Blogs, Help), Login/Sign-Up button. In mobile, the navigation links and the login/sign-up button are hidden in a hamburger menu.
- Hero Section: Brief introduction of Revue's mission with a CTA to download the app or sign up.
- Vision Section: A clear statement about Revue's goals.
- Help for Creators and Brands: Two distinct sections showcasing how each group benefits.

### 6.2 Blog Page

- Main Area: List of blogs with categories .

### 6.3 Login/Sign-up Page

- Google login button.

### 6.4 Post-Login Dashboard

- QR scanner functionality, including instructions for usage.

## 7. Technical Considerations

### 7.1 API Integrations

- Google OAuth for authentication.
- QR scanner plugin for Flutter Web.

### 7.2 Backend Integration

- Integration with the backend system to handle user data securely, along with session management for logged-in users.

### 7.3 Database

- Use Firebase for authentication, and other services.

# Custom Instructions

1. Every page should have a responsive layout that adapts to the screen size. There is a custom widget ResponsiveLayout that takes mobile and desktop pages and renders the appropriate page based on the screen size. Use it for every page.
2. For state management use combination of redux (for global state) and react-query (for api state).
3. Use Firebase for authentication, and other services.
4. Extract reusable components and functions into their own files.
5. Create a components, pages, utils, assets, styles, constants, types, hooks, services, api, store, slices, features, lib folders inside the app folder and put the components, pages, utils, assets, styles, constants, types, hooks, services, api, store, slices, features folders in the app folder.
6. For the pages:

## 1. Home Page

- The homepage should have a header with the logo and navigation links (About Us, Blogs, Help). In mobile, the navigation links and the login/sign-up button are hidden in a hamburger menu.
- The homepage should have a hero section with a brief introduction of Revue's mission with a CTA to download the app or sign up.
- The homepage should have a vision section with a clear statement about Revue's goals.
- The homepage should have a help for creators and brands section with two distinct sections showcasing how each group benefits.

## 2. Blog Page

- The blog page should have a list of blogs with categories like "Tips for creators", "Tips for brands", "Success stories", "Industry news", etc.
- The blog page should have a search bar to search for blogs.
- The blog page should have a pagination to navigate through the blogs.

## 3. Login/Sign-up Page

- The login/sign-up page should have a Google login button.

## 4. Post-Login Dashboard

- The post-login dashboard should have a QR scanner functionality with instructions for usage.

## 5. Footer Section

- The footer section should have links to About Us, Terms of Service, Privacy Policy, Help Center, and Contact Information.






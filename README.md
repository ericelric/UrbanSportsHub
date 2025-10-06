
<div align="center" dir="auto">
   <a href="https://urban-sports-hub.vercel.app/" rel="nofollow"><img width="350" alt="logo" src="https://github.com/user-attachments/assets/d1ee1936-0d66-4cbc-a079-73dd187745d1"></a><br>
</div>

---

Urban Sports Hub is a partial clone of the Urban Sports Club app, built to demonstrate its functionality and highlight a critical security flaw in the check-in process.

🚀 **Live Demo**: [Urban Sports Hub on Vercel](https://urban-sports-hub.vercel.app/)

## Disclaimer

This project is for educational and demonstration purposes only. It is intended to showcase a security vulnerability in the Urban Sports Club check-in process and suggest improvements. It should not be used for fraudulent activities.

## Features

- **Course Listing**: Browse a list of sports venues and available classes.
- **Check-in System**: Users can check in to a class and see their check-in details.
- **Profile Management**: Users can upload a profile picture and edit their name & member ID.
- **Persistent Data**: User data are saved in local storage for persistence and seamless experience.
- **Dark Mode Support**: The app adapts to the user's preferred theme.

## Tech Stack

- **Frontend**: React 19
- **State Management**: React Context API
- **UI & Styling**: CSS, Swiper.js for carousels
- **Backend (Planned)**: Firebase (for storing class data)
- **Deployment**: Vercel

## Screenshots

<img width="1898" alt="usc_1" height="1364" alt="430922794-5c107e7b-0f96-490f-9bf7-f0e5e115b888" src="https://github.com/user-attachments/assets/88190589-dcd7-4fb7-97ee-48ebd192c9ee" />

<img width="1898" alt="ush_2" src="https://github.com/user-attachments/assets/b0d32e8d-d671-46ee-afe9-c9126c90074a" />

<img width="1898" alt="ush_3" src="https://github.com/user-attachments/assets/308b6ae1-88e2-497a-a1eb-634ad5ddae42" />


## Installation & Setup

1. Clone the repository:

   ```sh
   git@github.com:ericelric/UrbanSportsHub.git
   cd UrbanSportsHub
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

## Usage

1. **Set Up Your Profile**  
   - Navigate to the **Profile Page**.  
   - Upload a **profile picture**, enter your **name**, and generate a **member ID**.  

2. **Select a Class**  
   - Go to the **Classes Page**.  
   - Browse available classes and **select the one** you want to check in for.  

3. **Check In**  
   - Visit the **Check-in Page**.  
   - Confirm your **check-in** to finalize the process.  

4. **Reset Check-in Data**  
   - If you want to start fresh, go back to the **Profile Page**.  
   - Reset your **check-in data** to clear the previous selection.  


---

# Security Flaw in the Urban Sports Club Check-in Process

## Introduction

Urban Sports Club offers a flexible membership that allows users to access a wide range of sports venues across multiple cities. To enter a venue, users must complete a check-in process via the official app. However, the current method of validating check-ins presents a critical security flaw that could be exploited by fraudulent users.

## How the Current Check-in Process Works

1. **User Scans a QR Code**: Upon arriving at a sports venue, the user scans a QR code provided by the venue.
2. **App Validates Membership**: The Urban Sports Club app checks whether the user meets all necessary requirements, including:
   - An active and valid membership
   - Available check-ins for the day
3. **Successful Check-in Confirmation**: If all conditions are met, the app displays a confirmation overlay that signals a successful check-in.
4. **Manual Verification by Staff**: The venue staff visually inspects the check-in confirmation on the user’s device. A valid check-in should include:
   - The member’s profile picture
   - A green confirmation dialog box
   - A moving circle around the profile picture
   - The name of the class or venue
   - The check-in date and time
   - A time counter since check-in
5. **Entry Granted**: If everything appears correct, the staff allows the user to enter the venue.

## The Security Flaw

The primary issue with this check-in system is that it relies entirely on a **visual verification method**. A fraudulent user could exploit this by using a cloned app that generates a fake check-in overlay identical to the original one. This means:

- The staff at the venue would be unable to differentiate between a legitimate check-in and a fake one.
- Since there is no backend verification on the venue’s side, a fake check-in cannot be detected.
- Fraudulent users could gain unauthorized access without a valid membership.

## Demonstration of the Issue

To highlight this security flaw, I developed a **clone of the Urban Sports Club app** called **Urban Sports Hub**. This app mimics the check-in process and generates an overlay that looks identical to a real check-in screen. While this project was created for educational purposes only, it demonstrates how easily the current system could be bypassed.

## A More Secure Check-in Solution

A better approach to handling check-ins would involve **QR code-based verification by the venue** instead of relying on a visual check. Here’s how it should work:

1. **User Receives a Unique QR Code**: Instead of displaying a confirmation screen, the app should generate a unique QR code representing the user’s valid membership.
2. **Venue Scans the QR Code**: The venue staff should use a dedicated scanning app or an Urban Sports Club terminal to verify the user’s membership in real-time.
3. **Backend Authentication**: The system should check the user’s membership status, remaining check-ins, and validity directly with Urban Sports Club’s backend.
4. **Entry Decision**: If the check-in is valid, the system grants access and logs the event securely.

## Conclusion

The current check-in system used by Urban Sports Club is highly vulnerable to fraud due to its reliance on manual visual verification. A more secure solution, where venues scan user-generated QR codes, would ensure that only legitimate check-ins are honored. This change would significantly improve security and prevent unauthorized access, benefiting both the company and its partner venues.

---
Urban Sports Hub<br>
Licensed under the MIT License. See LICENSE file for details.

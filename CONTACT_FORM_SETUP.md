# Contact Form Setup Instructions

The contact form is now configured to work with **Web3Forms**, a free service that sends form submissions to your email.

## Setup Steps:

### 1. Get Your Access Key
1. Visit [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email address (use: `eicon.buildersandsupply@gmail.com`)
4. You'll receive an access key via email

### 2. Update the Code
1. Open `/src/pages/Index.tsx`
2. Find line with `access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key

Example:
```javascript
access_key: "abcd1234-5678-90ef-ghij-klmnopqrstuv"
```

### 3. Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check the email inbox for `eicon.buildersandsupply@gmail.com`
4. You should receive the form submission

## Features Included:
- ✅ Form validation (all fields required)
- ✅ Loading state while submitting
- ✅ Success/error notifications
- ✅ Form resets after successful submission
- ✅ Professional email formatting

## Alternative Options:

If you prefer other solutions:

### Option 1: Formspree
- Visit [https://formspree.io](https://formspree.io)
- Similar to Web3Forms
- Free tier available

### Option 2: EmailJS
- Visit [https://www.emailjs.com](https://www.emailjs.com)
- Sends emails directly from browser
- More configuration required

### Option 3: Netlify Forms (if hosted on Netlify)
- Add `data-netlify="true"` to form tag
- No API key needed
- Only works on Netlify hosting

## Troubleshooting:

**Form doesn't submit:**
- Check browser console for errors
- Verify access key is correct
- Ensure internet connection is active

**Not receiving emails:**
- Check spam folder
- Verify email address in Web3Forms dashboard
- Confirm access key is active

**Need help?**
- Web3Forms documentation: https://docs.web3forms.com

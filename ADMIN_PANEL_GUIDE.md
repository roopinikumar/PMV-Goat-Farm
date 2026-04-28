# 🐐 PMV Goat Farm – Admin Panel Guide

## Overview
Your admin panel is now fully functional with dynamic content management capabilities. After logging in with your admin password, you can manage all website content including the home/hero section, breeds, about section, contact information, and FAQ.

---

## 📋 How to Access the Admin Panel

1. **Open your website** in a browser
2. **Click the "⚙️ Admin" button** in the bottom-left corner
3. **Enter the admin password**: `PMVFarm@2024`
   - ⚠️ **IMPORTANT**: Change this password immediately for security!
   - Password is in `pmv_script.js`, line with `const ADMIN_PASSWORD = 'PMVFarm@2024';`

---

## 🎯 Admin Panel Features

### 0️⃣ **Home Tab** 🏠
**Edit the hero section (main landing page)**

**Edit Hero Section:**
- Click "🏠 Home" tab in the admin panel
- Click "✏️ Edit Home Section"
- Update the following:
  - **Badge Text**: e.g., "Est. in Krishnagiri, Tamil Nadu"
  - **Title**: Main heading (e.g., "Premium Quality")
  - **Title Span**: Colored part of title (e.g., "Goat Farm")
  - **Description**: Hero section description
  - **Button 1 Text**: First CTA button (e.g., "View Our Breeds")
  - **Button 2 Text**: Second CTA button (e.g., "Enquire Now")
- Click "Save Home Section"

Changes appear instantly on your website's hero section!

---

### 1️⃣ **Gallery Tab** 📸
**Manage your farm photos**

**Add Photos:**
- Paste image URL OR upload from your device
- Add a caption (optional)
- Select category: Farm, Goats, or Customers
- Click "Add Photo"

**Edit Photos:**
- Click ✏️ on any photo to edit
- Change URL, caption, or category
- Click "Save Changes"

**Delete Photos:**
- Click 🗑️ to remove a photo
- Confirm deletion

---

### 2️⃣ **Breeds Tab** 🐐
**Manage your goat breeds dynamically**

**Add New Breed:**
- Click "+ Add New Breed"
- Fill in all details:
  - **Breed Name**: e.g., "Ettayapuram Mayilambadi"
  - **Origin**: e.g., "📍 Tamil Nadu Native Breed"
  - **Description**: Detailed breed information
  - **Image URL**: Path to breed image
  - **Features**: List each feature on a new line
  - **Featured**: Check to mark as "Popular Choice"
- Click "Save Breed"

**Edit Breed:**
- Click ✏️ on any breed in the list
- Modify any field
- Click "Save Breed"

**Delete Breed:**
- Click 🗑️ to remove a breed
- Changes are permanent

---

### 3️⃣ **About Tab** ℹ️
**Edit your farm's about section**

- Click "Edit About Section"
- Update the following:
  - **Section Label**: e.g., "Who We Are"
  - **Title**: Main heading
  - **Badge**: e.g., "100% Trusted Farm"
  - **Paragraphs**: Main content (2 sections)
  - **Image URL**: About section image
  - **Key Points**: Each highlight on a new line (e.g., "✅ Vaccinated & Health-Checked")
- Click "Save About Section"

Changes appear instantly on your website!

---

### 4️⃣ **Contact Tab** 📞
**Manage all contact information**

- Click "Edit Contact Info"
- Update:
  - **Location**: Farm location
  - **Primary Phone**: Main contact number
  - **Secondary Phone**: Alternate number
  - **Hours**: Operating hours (e.g., "Mon–Sun: 8am – 7pm")
  - **WhatsApp Link**: WhatsApp chat link
- Click "Save Contact Info"

All contact details update across your website automatically!

---

### 5️⃣ **FAQ Tab** ❓
**Manage frequently asked questions**

**Add FAQ:**
- Click "+ Add FAQ Item"
- Enter question and answer
- Click "Save FAQ Item"

**Edit FAQ:**
- Click ✏️ on any question
- Modify question/answer
- Click "Save FAQ Item"

**Delete FAQ:**
- Click 🗑️ to remove
- Confirm deletion

---

## 🔒 Security Tips

### ⚠️ CRITICAL: Change Your Admin Password!

1. Open `pmv_script.js` in your code editor
2. Find this line: `const ADMIN_PASSWORD = 'PMVFarm@2024';`
3. Replace with your secure password: `const ADMIN_PASSWORD = 'YourNewSecurePassword';`
4. Save and upload the file

**Password Requirements:**
- At least 8 characters
- Mix of uppercase, lowercase, numbers, and symbols
- Something only you know
- Example: `G0atFarm@Secure2024`

---

## 💾 Data Storage

All your changes are automatically saved to your browser's **localStorage**:
- **Gallery photos**: `pmv_gallery`
- **Breeds**: `pmv_breeds`
- **About section**: `pmv_about`
- **Contact info**: `pmv_contact`
- **FAQ items**: `pmv_faq`

⚠️ **Important Notes:**
- Data is stored **per browser/device**
- Clearing browser cache will delete all data
- Data is NOT backed up automatically
- **Recommendation**: Make regular backups by exporting your data

---

## 📝 Usage Examples

### Example: Adding a New Breed

1. Click "🐐 Breeds" tab
2. Click "+ Add New Breed"
3. Fill in details:
   - Name: "Saanen Dairy Goat"
   - Origin: "📍 Swiss Heritage Breed"
   - Description: "High milk-producing breed..."
   - Features: 
     ```
     High milk yield
     Excellent temperament
     Adaptable to climate
     ```
4. Mark as Featured if desired
5. Click "Save Breed"
6. Refresh website to see the new breed appear!

---

### Example: Updating Contact Information

1. Click "📞 Contact" tab
2. Click "Edit Contact Info"
3. Update your phone number
4. Click "Save Contact Info"
5. The new number appears everywhere on your site instantly!

---

## 🔄 Update Frequency

- **Gallery**: Update photos whenever you want
- **Breeds**: Add/remove breeds as needed
- **About**: Update seasonally or when business changes
- **Contact**: Update when info changes
- **FAQ**: Add new questions as customers ask them

---

## 🐛 Troubleshooting

### I forgot my admin password!
- Open `pmv_script.js`
- Find and change the password line
- Upload the file
- Log in with your new password

### My changes aren't showing!
1. **Clear browser cache** (Ctrl+Shift+Delete)
2. **Hard refresh** the website (Ctrl+F5)
3. Check if you clicked "Save" button
4. Open DevTools (F12) → Application → LocalStorage to verify data

### Images aren't displaying
- Check the image URL is correct
- Ensure the image file exists
- Try using absolute URLs (full paths with domain)
- Use base64 data URLs for uploaded files

### Admin button disappeared
- Try opening DevTools (F12)
- Check the Console for errors
- Verify `pmv_script.js` loaded correctly

---

## 📱 Mobile Admin Access

The admin panel works on mobile devices but is optimized for desktop:
- Use landscape orientation for better visibility
- Tap the "⚙️ Admin" button at bottom-left
- All features work identically on mobile

---

## 💡 Best Practices

✅ **DO:**
- Change default password immediately
- Keep image URLs short and meaningful
- Update FAQ based on real customer questions
- Review content regularly for accuracy
- Make periodic backups

❌ **DON'T:**
- Share your admin password
- Store passwords in plain text
- Upload very large images (optimize first)
- Delete important content without backup
- Use special HTML characters in fields

---

## 🆘 Need Help?

If you encounter issues:

1. **Check browser console** (F12 → Console)
2. **Verify localhost storage** (F12 → Application → Storage)
3. **Test in different browser**
4. **Clear cache and try again**
5. **Check file syntax** in your code editor

---

## 📞 Support

For further assistance with your website management, contact your web developer or refer to the browser's developer documentation.

**Last Updated**: 2024
**Version**: 1.0

# 🔐 Initial Admin Panel Setup

## ⚠️ FIRST TIME SETUP - DO THIS IMMEDIATELY!

### Step 1: Change Your Admin Password

Your admin panel comes with a default password for testing: **`PMVFarm@2024`**

You MUST change this to a secure, unique password immediately!

#### How to Change Password:

1. **Open `pmv_script.js`** in your code editor
2. **Find this line** (around line 1200):
   ```javascript
   const ADMIN_PASSWORD = 'PMVFarm@2024';
   ```

3. **Replace with your new password**:
   ```javascript
   const ADMIN_PASSWORD = 'YourNewSecurePassword123!';
   ```

4. **Save the file**

5. **Upload/Sync** the file to your server/hosting

6. **Test** by logging in with your new password

---

## 🔑 Recommended Password Format

Choose a strong password with:
- **Minimum 12 characters** (longer = more secure)
- **Mix of character types**:
  - Uppercase: A-Z
  - Lowercase: a-z
  - Numbers: 0-9
  - Special symbols: !@#$%^&*

### ✅ Good Examples:
- `G0atFarm@Admin2024!`
- `PMVSecure#Farm123`
- `Krishnagiri_Goats@2024`
- `Admin_K9rithi12$`

### ❌ Avoid These:
- `password`
- `123456`
- `admin`
- `PMVFarm@2024` (the default!)
- Your birthdate or name

---

## 🧪 Test Your Setup

After changing the password:

1. **Open your website**
2. **Click the "⚙️ Admin" button** (bottom-left corner)
3. **Enter your NEW password**
4. **Press Enter or click Login**
5. ✅ You should see the admin dashboard with tabs:
   - 📸 Gallery
   - 🐐 Breeds
   - ℹ️ About
   - 📞 Contact
   - ❓ FAQ

If you get an "Incorrect password" error, double-check your password matches exactly what you entered in the code.

---

## 📝 Keep Your Password Safe

**Where to Store It:**
- ✅ Password manager (1Password, LastPass, Bitwarden, etc.)
- ✅ Secure note in your phone's notes app
- ✅ Encrypted file on your computer
- ❌ Post-it note on your monitor
- ❌ Shared emails or documents
- ❌ Unencrypted text files

---

## 🔄 Resetting Password if Forgotten

If you forget your admin password:

1. Open `pmv_script.js` in your editor
2. Change the line to a new password
3. Save and upload
4. Log in with the new password

**There's no "forgot password" feature because all data is stored locally. You must edit the code directly.**

---

## ✨ Quick Admin Panel Overview

After login, you can:

| Tab | What You Can Do |
|-----|-----------------|
| **📸 Gallery** | Add/edit/delete photos with captions |
| **🐐 Breeds** | Create and manage goat breed listings |
| **ℹ️ About** | Edit farm description and key points |
| **📞 Contact** | Update phone, location, hours, WhatsApp |
| **❓ FAQ** | Add/edit/delete FAQ questions & answers |

---

## 🎯 Next Steps

1. ✅ **Change your admin password** (CRITICAL!)
2. ✅ **Test logging in** with your new password
3. ✅ **Add/update content** using each tab
4. ✅ **Review your website** to see changes
5. ✅ **Keep password in a safe place**

---

## 📚 For Complete Information

See **`ADMIN_PANEL_GUIDE.md`** for:
- Detailed usage instructions for each section
- Best practices
- Troubleshooting
- Mobile access tips
- Backup recommendations

---

## 🆘 Help!

### "Incorrect password" error
- Make sure you copied the exact password
- Check for extra spaces or special characters
- Remember: passwords are case-sensitive!
- Example: `Admin123!` ≠ `admin123!`

### "Admin button doesn't show"
- Refresh the page (F5)
- Check that `pmv_script.js` is loading correctly
- Open DevTools (F12) → Console for error messages

### Can't find pmv_script.js
- It should be in the same folder as `pmv_goat_farm.html`
- Ask your web developer if you're not sure

---

**⚠️ SECURITY REMINDER:** Change your default password now before using in production!

Good luck with your admin panel! 🚀

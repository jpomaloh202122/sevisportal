# Government Portal Images

This folder contains all images, logos, and icons used in the e-government portal.

## Folder Structure

```
public/images/
├── logos/           # Main logos and branding
├── icons/           # Service icons and UI elements
├── hero/            # Hero section images
└── README.md        # This file
```

## Files

### Logos
- `newlogo.png` - Main government portal logo (45KB)
  - Primary logo used in header and as favicon
  - Used across all pages for consistent branding
  - Displayed with transparent background container for clean appearance
- `govportal.png` - Previous government portal logo (413KB)
  - Legacy logo file (no longer in use)
- `government-logo.svg` - Alternative government portal logo (200x60px)
  - Black background with yellow building icon
  - White "GOVERNMENT" text with yellow "PORTAL" subtitle
  - Red decorative line accent

### Icons
- `newlogo.png` - Primary site icon and favicon (45KB)
  - Used as favicon across all browsers
  - Same image as main logo for consistent branding
  - Also available as `/favicon.png` for compatibility
- `favicon.svg` - Alternative site favicon (32x32px)
  - Black circular background
  - Yellow building with red roof and white flag
- `education-icon.svg` - Education services icon (48x48px)
  - Blue background with white graduation cap
  - Red book and white tassel
- `health-icon.svg` - Health services icon (48x48px)
  - Red background with white medical cross
  - White heart symbol
- `transport-icon.svg` - Transport services icon (48x48px)
  - Purple background with white car
  - Black wheels and yellow headlights
- `citizen-icon.svg` - Citizen services icon (48x48px)
  - Green background with white user profile
  - Yellow ID card and red passport

## Usage Guidelines

### In Next.js Components
```jsx
import Image from 'next/image';

// For logos
<Image 
  src="/images/newlogo.png" 
  alt="Government Portal Logo"
  width={200} 
  height={60} 
  priority
/>

// For icons
<Image 
  src="/images/icons/education-icon.svg" 
  alt="Education Services"
  width={48} 
  height={48} 
/>
```

### Color Scheme
The images follow the portal's color scheme:
- **Black**: Authority and professionalism
- **Yellow**: Accent and interactive elements
- **Red**: Primary actions and important elements
- **White**: Content and readability

### File Formats
- **SVG**: Used for logos and icons (scalable, lightweight)
- **PNG**: Use for complex images or when transparency is needed
- **JPG**: Use for photographs and complex graphics

## Adding New Images

1. Place images in the appropriate subfolder
2. Use descriptive filenames (e.g., `service-name-icon.svg`)
3. Optimize images for web use
4. Update this README with new file descriptions
5. Use consistent naming conventions

## Optimization Tips

- Use SVG for logos and icons when possible
- Compress PNG/JPG files before adding
- Use appropriate dimensions for the intended use
- Include alt text for accessibility
- Consider responsive image sizes for different screen sizes 
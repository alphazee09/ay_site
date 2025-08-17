# Loading GIF Instructions

## How to Add Your Loading GIF

1. **Replace the placeholder file**: 
   - Remove the current `loading.gif` file
   - Add your actual loading GIF file with the name `loading.gif`

2. **File location**: 
   - Place your GIF file in this directory: `client/src/assets/gif/loading.gif`

3. **Recommended specifications**:
   - **Size**: 128x128 pixels or larger (will be scaled down)
   - **Format**: GIF
   - **Background**: Transparent or matching the website theme
   - **Animation**: Smooth, professional loading animation

4. **Fallback**: 
   - If the GIF doesn't load, the system will automatically show a spinning loader
   - The fallback uses the website's color scheme (blue to purple gradient)

## Current Implementation

The loading GIF is used in:
- **Initial page load**: Full-screen loading animation
- **Section loading**: Individual section loaders
- **Component loading**: Various component loaders throughout the site

## Features

- ✅ Bilingual loading messages (English/Arabic)
- ✅ Progressive loading with percentage indicators
- ✅ Smooth transitions between loading states
- ✅ Fallback spinner if GIF fails to load
- ✅ Responsive design for all screen sizes
- ✅ Accessibility features included

## Customization

You can customize the loading experience by:
- Modifying the loading messages in the components
- Adjusting the loading duration in `useLoading.ts`
- Changing the fallback spinner colors in `LoadingSpinner.tsx`
- Updating the loading GIF size in the respective components
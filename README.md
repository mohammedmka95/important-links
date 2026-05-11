# Important Links Chrome Extension

A simple and efficient Chrome extension that allows you to save, manage, and quickly access your important links and bookmarks.

## Features

- **Save Links**: Manually add URLs with custom labels
- **Save Current Tab**: Quickly save the URL of your current active tab
- **Link Management**: View all saved links in an organized list
- **Delete Functionality**: Remove individual links or clear all links at once
- **Local Storage**: All links are saved locally in your browser
- **Tabbed Interface**: Clean and intuitive tab-based navigation

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension icon will appear in your Chrome toolbar

## Usage

### Adding Links Manually
1. Click the extension icon to open the popup
2. Go to the "Add Link" tab
3. Enter a label and URL (without `https://`)
4. Click "Add Link"

### Adding Current Tab
1. Navigate to the webpage you want to save
2. Open the extension popup
3. Go to the "Add Tab Link" tab
4. Enter a label for the current page
5. Click "Add Tab link"

### Managing Links
1. Go to the "Links List" tab to view all saved links
2. Click any link to open it in a new tab
3. Double-click the "Delete" button next to any link to remove it
4. Double-click "Delete All" to clear all saved links

## Technical Details

- **Manifest Version**: 3
- **Permissions**: `tabs` (for accessing current tab URL)
- **Storage**: Uses browser's `localStorage` for data persistence
- **Technologies**: HTML5, CSS3, JavaScript (ES6)

## File Structure

```
important_links_chrome_extensions/
├── manifest.json          # Extension configuration
├── icon.png               # Extension icon (128x128)
├── icon.svg               # Source SVG icon
├── impoetant_links.html   # Main popup HTML
├── impoetant_links.css    # Styling for the popup
├── impoetant_links.js     # Main functionality
└── README.md             # This file
```

## Development

To modify or extend the extension:

1. **HTML Structure**: Edit `impoetant_links.html` for UI changes
2. **Styling**: Modify `impoetant_links.css` for visual updates
3. **Functionality**: Update `impoetant_links.js` for new features
4. **Icon**: Replace `icon.png` with a new 128x128 PNG image

## Privacy

This extension:
- Does not collect or transmit any personal data
- Stores all data locally in your browser
- Does not require internet access for core functionality
- Only requests the `tabs` permission to read the current tab URL

## Version History

- **v1.1**: Updated to PNG icon for better compatibility
- **v1.0**: Initial release with core functionality

## Contributing

Feel free to submit issues or pull requests to improve this extension.

## License

This project is open source and available under the MIT License.

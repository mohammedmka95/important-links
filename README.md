# 🔗 Important Links

> **Fast to save. Easy to find. Easy to open.**

**Important Links** is a fast, beautiful, privacy-first link manager for Chrome.

Save the pages that matter, organize them your way, find anything instantly, and open it whenever you need it — without accounts, servers, tracking, or unnecessary complexity.

Built with **Chrome Manifest V3**, Important Links keeps your data in your browser using `chrome.storage.local`.

---

## ✨ Why Important Links?

The web is full of pages you don't want to lose.

Articles you want to read.  
Documentation you use every day.  
Tools you keep coming back to.  
Projects, resources, research, shopping pages, and personal favorites.

Browser bookmarks can become difficult to manage.

Important Links gives those pages a dedicated, focused home:

**Save → Organize → Search → Open**

No account required. No cloud service required. Your links stay on your device.

---

# 🚀 Features

### ⚡ Save links instantly

Save the page you're currently viewing or add a link manually.

When saving the current tab, Important Links automatically detects:

- Page title
- URL
- Current tab

You can review and edit the information before saving.

---

### 🔍 Instant search

Find your links as you type.

Search across:

- Titles
- URLs
- Domains
- Descriptions
- Categories
- Tags

Use:

```text
Ctrl + K
```

or on macOS:

```text
⌘ + K
```

You can also press `/` to quickly focus search.

---

### 📌 Pin your important links

Keep your most important links at the top of your collection.

Pinned links are visually highlighted and automatically prioritized in the list.

---

### ⭐ Favorites

Mark links that deserve special attention and quickly filter your collection to show only them.

---

### 🏷️ Categories & tags

Organize your links without forcing a complicated folder structure.

Built-in categories include:

- Work
- Personal
- Development
- Research
- Shopping
- Learning
- Other

You can also create your own categories and add custom tags.

Tags are optional, so saving a link remains fast.

---

### 🔀 Sorting & filtering

Find the right link using flexible organization tools.

Sort by:

- Recently added
- Oldest
- Alphabetical
- Most used

Filter by:

- Favorites / pinned
- Category
- Tags

---

### ✏️ Edit everything

Every saved link can be edited later.

Update:

- Title
- URL
- Description
- Category
- Tags
- Favorite status

---

### 🌐 Open links your way

Open a saved link:

- In a new tab
- In the current tab

You can also open links directly by clicking their title.

Important Links keeps track of link usage so frequently opened resources can be sorted by usage.

---

### 📋 Copy URLs

Copy any saved URL with one click.

Useful when you need to quickly share or paste a resource somewhere else.

---

### 🛡️ Smart duplicate detection

Important Links helps prevent accidental duplicates.

URLs are normalized before comparison, including handling common differences such as:

- `http` vs `https`
- `www`
- Trailing slashes
- URL fragments
- Common tracking parameters

If a link already exists, you can:

- Open the existing link
- Edit the existing link
- Cancel
- Save it anyway

---

### ↩️ Safe deletion with Undo

Deleted links aren't immediately lost from the interface.

Important Links provides an **Undo** action after deletion so accidental removals can be recovered.

The same safety approach is used for major destructive operations such as replacing imported data or clearing the collection.

---

# 📥 Import & Export

Your data should never be trapped inside an application.

Important Links supports:

### JSON

Export and import your complete link collection using JSON.

### CSV

Export and import links using CSV for compatibility with spreadsheets and other tools.

### Import modes

When importing, choose between:

**Merge**

Add new links while keeping your existing collection.

**Replace**

Replace your current collection with the imported data.

Duplicate detection helps prevent accidental duplicates during imports.

Invalid entries are safely rejected instead of being added as broken links.

---

# 🌙 Light, Dark & System Themes

Choose the appearance that works best for you:

- ☀️ Light
- 🌙 Dark
- 💻 System

System mode automatically follows your operating system's appearance preference.

The extension also respects:

```text
prefers-reduced-motion
```

for users who prefer less animation.

---

# ♿ Accessibility

Important Links is designed to be usable with different interaction methods.

Accessibility considerations include:

- Keyboard navigation
- Visible focus states
- Semantic controls
- Screen-reader-friendly labels
- Accessible dialogs
- Keyboard shortcuts
- Reduced-motion support
- Color contrast considerations
- Buttons with meaningful labels
- Non-color-based state indicators

The goal is simple:

**You shouldn't need a mouse to manage your links.**

---

# 🔒 Privacy First

Your links are yours.

Important Links is designed as a **local-first, privacy-focused extension**.

### We don't use:

- ❌ User accounts
- ❌ External servers
- ❌ Analytics
- ❌ Tracking
- ❌ Advertising
- ❌ Remote databases
- ❌ Cloud synchronization

Your saved links are stored locally using:

```javascript
chrome.storage.local
```

The extension does not send your saved links to a remote service.

---

# 🛡️ Security

Important Links takes user-provided URLs and imported data seriously.

The extension:

- Validates URLs before saving them
- Rejects dangerous protocols such as `javascript:`, `data:`, and `vbscript:`
- Sanitizes imported data
- Limits field lengths
- Avoids unsafe HTML rendering for user-controlled content
- Protects CSV exports against spreadsheet formula injection
- Uses the minimum functionality necessary for the extension
- Handles storage failures without silently discarding changes

Imported files are treated as untrusted input and validated before they become part of your collection.

---

# 🔐 Permissions

Important Links requests only the permissions required for its functionality.

### `storage`

Used to save:

- Links
- Settings
- Categories
- Tags
- Favorites
- Usage information

Data is stored locally in Chrome.

### `activeTab`

Used when you choose to save the currently active tab.

This allows Important Links to read the current tab's URL/title when you explicitly use the save-current-tab functionality.

### `favicon`

Used to display website icons for saved web links using Chrome's favicon functionality.

---

# 🔄 Upgrading from v1

Important Links v2 includes a migration path for users upgrading from the previous version.

Existing v1 data stored using the old storage format is automatically detected and migrated into the new data structure the first time the extension is opened.

The new architecture stores links as structured objects rather than maintaining separate URL and label arrays.

This makes future features and data portability much easier.

---

# 🧠 Built for Speed

Important Links is intentionally lightweight.

The extension avoids unnecessary frameworks and external services.

The popup is designed to:

- Open quickly
- Search instantly
- Render efficiently
- Keep interactions responsive
- Work offline
- Avoid network dependencies

The core application uses:

- HTML
- CSS
- Modern JavaScript
- Chrome Extensions APIs
- Manifest V3

---

# 🗂️ Data Model

Each saved link contains structured information such as:

```json
{
  "id": "unique-id",
  "title": "Example",
  "url": "https://example.com",
  "description": "Useful resource",
  "category": "Development",
  "tags": ["tools", "web"],
  "favorite": true,
  "createdAt": 1700000000000,
  "updatedAt": 1700000000000,
  "openCount": 5,
  "lastOpenedAt": 1700000000000
}
```

This makes the extension extensible and provides a strong foundation for future functionality.

---

# 📦 Installation

## Install from source

1. Download or clone this repository.

2. Open Chrome:

```text
chrome://extensions
```

3. Enable **Developer mode**.

4. Click **Load unpacked**.

5. Select the `important-links` project folder.

6. Pin Important Links to your Chrome toolbar for quick access.

---

# 🧪 Development

Clone the repository:

```bash
git clone https://github.com/mohammedmka95/important-links.git
```

Open the project in your editor.

Then:

1. Open `chrome://extensions`
2. Enable Developer mode
3. Select **Load unpacked**
4. Select the project directory
5. Make your changes
6. Click **Reload** on the extension
7. Test the updated version

For debugging, inspect the popup and extension service worker through Chrome's extension developer tools.

---

# 🗂️ Project Structure

```text
important-links/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── lib.js
├── icons/
│   ├── icon.svg
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── README.md
└── LICENSE
```

---

# 🧩 Architecture

The project separates application concerns into focused areas.

### `popup.js`

Handles:

- UI
- User interaction
- Rendering
- Search
- Filtering
- Sorting
- Dialogs
- Link actions

### `lib.js`

Handles reusable logic such as:

- URL parsing
- URL normalization
- Data validation
- Storage
- Migration
- Import/export
- JSON processing
- CSV processing
- Data sanitization

### `popup.css`

Contains:

- Design system
- Themes
- Components
- Responsive popup layout
- Accessibility states
- Animations

This separation makes the extension easier to maintain and extend.

---

# 🐛 Reporting Bugs

Found something that doesn't work?

Please open a GitHub issue.

Include:

- What happened
- What you expected
- Steps to reproduce
- Chrome version
- Operating system
- Extension version
- Screenshots or console errors when useful

Please remove private or sensitive information before posting screenshots or logs.

---

# 💡 Feature Requests

Have an idea?

Open a feature request and describe:

1. The problem you're trying to solve
2. How you think the feature should work
3. Why it would be useful
4. Any examples of how you would use it

Ideas that keep the extension **fast, private, and simple** are especially welcome.

---

# 🛣️ Roadmap

Possible future improvements include:

- Chrome Web Store distribution
- Optional browser sync
- More advanced organization
- Custom keyboard shortcuts
- Bulk link management
- Drag-and-drop organization
- Additional export formats
- Improved usage insights
- Optional backup workflows

Future features will continue to prioritize:

**Privacy → Speed → Simplicity → Usefulness**

---

# 📜 Releases

## v2.0.0

### Major improvements

- Complete UI/UX modernization
- Modern light and dark themes
- System theme support
- Improved link cards
- Instant full-text search
- `Ctrl/Cmd + K` search shortcut
- `/` search shortcut
- Pinning and favorites
- Categories and tags
- Sorting and filtering
- Link usage tracking
- Duplicate URL detection
- URL normalization
- Edit links
- Copy URLs
- Open in current or new tab
- Undo after deletion
- Import/export JSON
- Import/export CSV
- Merge or replace imports
- Automatic v1 data migration
- Improved URL validation
- Safer imported data handling
- CSV formula-injection protection
- Improved accessibility
- Keyboard navigation
- Reduced-motion support
- Improved error handling
- Local-first `chrome.storage.local` architecture
- Manifest V3 architecture

---

# 🔮 Philosophy

Important Links is built around a simple idea:

> **Your important links shouldn't be difficult to find.**

It should take seconds to save something.

It should take seconds to find it later.

And your data should remain yours.

**Fast. Private. Organized.**

That's Important Links.

---

# 📄 License

This project is licensed under the **MIT License**.

See [`LICENSE`](LICENSE) for the full license text.

---

# ⭐ Support

If Important Links is useful to you:

- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Contribute improvements
- 📣 Share it with someone who needs a better way to manage links

Thank you for using **Important Links**! 🔗
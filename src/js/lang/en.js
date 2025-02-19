export default {
  // Language specific options.
  // For more see defaultOptions in sa11y.js
  options: {
    langCode: 'en',
  },

  // Localization
  strings: {
    // Global text
    'ALERT_CLOSE': 'Close',
    'ALERT_TEXT': 'Alert',
    'CONTAINER_LABEL': 'Accessibility Checker',
    'CONTRAST': 'Contrast',
    'DARK_MODE': 'Dark Mode',
    'ERROR': 'Error',
    'FORM_LABELS': 'Form labels',
    'GOOD': 'Good',
    'HIDE_OUTLINE': 'Hide Outline',
    'HIDE_SETTINGS': 'Hide Settings',
    'LANG_CODE': 'en',
    'LINKS_ADVANCED': 'Links (Advanced)',
    'MAIN_TOGGLE_LABEL': 'Check Accessibility',
    'OFF': 'Off',
    'ON': 'On',
    'PAGE_OUTLINE': 'Page Outline',
    'SETTINGS': 'Settings',
    'SHORTCUT_SR': 'Skip to issue. Keyboard shortcut: Alt period',
    'SHORTCUT_TOOLTIP': 'Skip to issue',
    'SHOW_OUTLINE': 'Show Outline',
    'SHOW_SETTINGS': 'Show Settings',
    'WARNING': 'Warning',

    // Readability panel.
    'AVG_WORD_PER_SENTENCE': 'Average words per sentence:',
    'COMPLEX_WORDS': 'Complex words:',
    'DIFFICULT_READABILITY': 'Difficult',
    'FAIRLY_DIFFICULT_READABILITY': 'Fairly difficult',
    'GOOD_READABILITY': 'Good',
    'READABILITY': 'Readability',
    'TOTAL_WORDS': 'Words:',
    'VERY_DIFFICULT_READABILITY': 'Very difficult',

    // Panel status
    'PANEL_STATUS_1': '1 accessibility error and 1 warning found.',
    'PANEL_STATUS_10': '%(warningCount) <span class="sa11y-visually-hidden">warnings found.</span>',
    'PANEL_STATUS_11': '%(totalCount) <span class="sa11y-visually-hidden">total issues found.</span>',
    'PANEL_STATUS_2': '1 accessibility error and %(warningCount) warnings found.',
    'PANEL_STATUS_3': '%(errorCount) accessibility errors and 1 warning found.',
    'PANEL_STATUS_4': '%(errorCount) accessibility errors and %(warningCount) warnings found.',
    'PANEL_STATUS_5': '1 accessibility error found.',
    'PANEL_STATUS_6': '%(errorCount) accessibility errors found.',
    'PANEL_STATUS_7': 'Please review warning.',
    'PANEL_STATUS_8': 'Please review %(warningCount) warnings.',
    'PANEL_STATUS_9': 'No accessibility errors found.',
    // Can't find this one
    'notVisibleAlert': 'The item you are trying to view is not visible; it may be hidden or inside of an accordion or tab component. Here"s a preview: ',

    // Headings
    'HEADING_EMPTY': 'Empty heading found! To fix, delete this line or change its format from <span class="sa11y-red-text sa11y-bold">Heading %(level)</span> to <span class="sa11y-bold">Normal</span> or <span class="sa11y-bold">Paragraph</span>.',
    'HEADING_EMPTY_WITH_IMAGE': 'Heading has no text, but contains an image. If this is not a heading, change its format from <span class="sa11y-red-text sa11y-bold">Heading %(level)</span> to <span class="sa11y-bold">Normal</span> or <span class="sa11y-bold">Paragraph</span>. Otherwise, please add alt text to the image if it is not decorative.',
    'HEADING_FIRST': 'The first heading on a page should usually be a Heading 1 or Heading 2. Heading 1 should be the start of the main content section, and is the main heading that describes the overall purpose of the page. Learn more about <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/" target="_blank">Heading Structure. %(sa11yNewTab)</a>',
    'HEADING_LONG': 'Heading is long! Headings should be used to organize content and convey structure. They should be brief, informative, and unique. Please keep headings less than 160 characters (no more than a sentence).',
    'HEADING_LONG_INFO': 'Character Count: <span class="sa11y-bold sa11y-red-text">%(headingLength)</span>.',
    'HEADING_MISSING_ONE': 'Missing Heading 1. Heading 1 should be the start of the main content area, and is the main heading that describes the overall purpose of the page. Learn more about <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/" target="_blank">Heading Structure. %(sa11yNewTab)</a>',
    'HEADING_NON_CONSECUTIVE_LEVEL': 'Non-consecutive heading level used. Headings should never skip levels, or go from <span class="sa11y-bold">Heading %(prevLevel)</span> to <span class="sa11y-red-text sa11y-bold">Heading %(level)</span>.',
    'PANEL_HEADING_MISSING_ONE': 'Missing Heading 1!',

    // Link Text
    'LINK_BEST_PRACTICES': 'Consider replacing the link text: <span class="sa11y-red-text sa11y-bold">%(error)</span>',
    'LINK_BEST_PRACTICES_DETAILS': '<ul><li>&quot;Click here&quot; places focus on mouse mechanics, when many people do not use a mouse or may be viewing this website on a mobile device. Consider using a different verb that relates to the task.</li><li>Avoid using HTML symbols as call to actions unless they are hidden to assistive technologies.</li></ul>',
    'LINK_EMPTY': 'Remove empty links without any text.',
    'LINK_EMPTY_LINK_NO_LABEL': 'Link does not have discernable text that is visible to screen readers and other assistive technology. To fix:<ul><li>Add some concise text that describes where the link takes you.</li><li>If it is an <a href="https://a11y-101.com/development/icons-and-links" target="_blank">icon link or SVG,%(sa11yNewTab)</a> it is likely missing a descriptive label.</li><li>If you think this link is an error due to a copy/paste bug, consider deleting it.</li></ul>',
    'LINK_LABEL': 'The descriptive label for this link is: <span class="sa11y-bold">%(linkText)</span>',
    'LINK_STOPWORD': 'Link text may not be descriptive enough out of context: <span class="sa11y-red-text sa11y-bold">%(error)</span>',
    'LINK_STOPWORD_TIP': '<span class="sa11y-bold">Tip!</span> Link text should always be clear, unique, and meaningful. Avoid common words like "click here"; or "learn more".',
    'LINK_URL': 'Longer, less intelligible URLs used as link text might be difficult to listen to with assistive technology. In most cases, it is better to use human-readable text instead of the URL. Short URLs (such as a site\'s homepage) are okay.',
    'LINK_URL_TIP': '<span class="sa11y-bold">Tip!</span> Link text should always be clear, unique, and meaningful so it could be understood out of context.',

    // Links Advanced
    'FILE_TYPE_WARNING': 'Link points to a PDF or downloadable file (e.g. MP3, Zip, Word Doc) without warning. Indicate the file type within the link text. If it is a large file, consider including the file size.',
    'FILE_TYPE_WARNING_TIP': '<span class="sa11y-bold">Example:</span> Executive Report (PDF, 3MB)',
    'LINK_IDENTICAL_NAME': 'Link has identical text as another link, although it points to a different page. Multiple links with the same text may cause confusion for people who use screen readers.',
    'LINK_IDENTICAL_NAME_TIP': 'Consider making the following link more descriptive to help distinguish it from other links: <span class="sa11y-red-text sa11y-bold">%(linkText)</span>',
    'NEW_TAB_WARNING': 'Link opens in a new tab or window without warning. Doing so can be disorienting, especially for people who have difficulty perceiving visual content. Secondly, it is not always a good practice to control someone\'s experience or make decisions for them. Indicate that the link opens in a new window within the link text.',
    'NEW_TAB_WARNING_TIP': '<span class="sa11y-bold">Tip!</span> Learn best practices: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">opening links in new browser windows and tabs.</a>!',

    // Images
    'HYPERLINK_ALT_LENGTH_MESSAGE': 'Alt text description on a linked image is <span class="sa11y-bold">too long</span>. The alt text on linked images should describe where the link takes you, not a literal description of the image. <span class="sa11y-bold">Consider using the title of the page it links to as the alt text.</span>',
    'HYPERLINK_ALT_LENGTH_MESSAGE_INFO': 'The alt text is <span class="sa11y-red-text sa11y-bold">%(altLength)</span> characters: <span class="sa11y-red-text sa11y-bold">%(altText)</span>',
    'LINK_ALT_HAS_BAD_WORD_MESSAGE': 'File extension within the alt text found. If the image conveys a story, mood, or important information - be sure to describe the image.',
    'LINK_ALT_HAS_BAD_WORD_MESSAGE_INFO': 'Remove: <span class="sa11y-red-text sa11y-bold">%(error)</span>.<br>The alt text for this image is: <span class="sa11y-bold">%(altText)</span>',
    'LINK_ALT_HAS_SUS_WORD_MESSAGE': 'Assistive technologies already indicate that this is an image, so &quot;<span class="sa11y-red-text sa11y-bold">%(error)</span>&quot; or &quot;%(error) of&quot; may be redundant.',
    'LINK_ALT_HAS_SUS_WORD_MESSAGE_INFO': 'The alt text for this image is: <span class="sa11y-bold">%(altText)</span>',
    'LINK_ALT_PLACEHOLDER_MESSAGE': 'Non-descript or placeholder alt text found. Replace the following alt text with something more meaningful: <span class="a11y-bold sa11y-red-text">%(altText)</span>.',
    'LINK_ALT_TOO_LONG_MESSAGE': 'Alt text description is <span class="sa11y-bold">too long</span>. Alt text should be concise, yet meaningful like a <em>tweet</em> (around 100 characters). If this is a complex image or a graph, consider putting the long description of the image in the text below or an accordion component.',
    'LINK_ALT_TOO_LONG_MESSAGE_INFO': 'The alt text is <span class="sa11y-red-text sa11y-bold">%(altLength)</span> characters: <span class="sa11y-red-text sa11y-bold">%(altText)</span>',
    'LINK_ANCHOR_LINK_AND_ALT_MESSAGE': 'Image link contains <span class="sa11y-bold">both alt text and surrounding link text.</span> If this image is decorative and is being used as a functional link to another page, consider marking the image as decorative or null - the surrounding link text should suffice.',
    'LINK_ANCHOR_LINK_AND_ALT_MESSAGE_INFO': 'Alt text: <span class="sa11y-bold">%(altText)</span>',
    'LINK_DECORATIVE_MESSAGE': 'Image is marked as <span class="sa11y-bold">decorative</span> and will be ignored by assistive technology. If the image conveys a story, mood or important information - be sure to add alt text.',
    'LINK_HYPERLINKED_IMAGE_ARIA_HIDDEN': 'Link around image has <span class="sa11y-kbd">aria-hidden=&quot;true&quot;</span> but is still keyboard focusable. If you are intending to hide a redundant or duplicate link, add <span class="sa11y-kbd">tabindex=&quot;-1&quot;</span> as well.',
    'LINK_IMAGE_BAD_ALT_MESSAGE': 'File extension within the alt text found. Ensure the alt text describes the destination of the link, not a literal description of the image. Remove: <span class="sa11y-red-text sa11y-bold">%(error)</span>.',
    'LINK_IMAGE_BAD_ALT_MESSAGE_INFO': 'The alt text for this image is: <span class="sa11y-bold">%(altText)</span>',
    'LINK_IMAGE_LINK_ALT_TEXT_MESSAGE': 'Image link contains alt text, although please ensure alt text describes the destination page. <span class="sa11y-bold">Consider using the title of the page it links to as the alt text.</span> Does the alt text describe where the link takes you?',
    'LINK_IMAGE_LINK_ALT_TEXT_MESSAGE_INFO': 'Alt text: <span class="sa11y-bold">%(altText)</span>',
    'LINK_IMAGE_LINK_NULL_ALT_NO_TEXT_MESSAGE': 'Image within link is marked as decorative and there is no link text. Please add alt text to the image that describes the destination of the link.',
    'LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE': 'Non-descript or placeholder alt text within a linked image found. Ensure the alt text describes the destination of the link, not a literal description of the image. Replace the following alt text: <span class="sa11y-bold sa11y-red-text">%(altText)</span>.',
    'LINK_IMAGE_SUS_ALT_MESSAGE': 'Assistive technologies already indicate that this is an image, so &quot;<span class="sa11y-red-text sa11y-bold">%(error)</span>&quot; or &quot;%(error) of&quot; may be redundant. Ensure the alt text describes the destination of the link, not a literal description of the image.',
    'LINK_IMAGE_SUS_ALT_MESSAGE_INFO': 'The alt text for this image is: <span class="sa11y-bold">%(altText)</span>.',
    'LINK_LINK_HAS_ALT_MESSAGE': 'Image is marked as decorative, although the link is using the surrounding text as a descriptive label.',
    'LINK_PASS_ALT': 'The alt text for this image is: <span class="sa11y-bold">%(altText)</span>',
    'MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE': 'Image is being used as a link with surrounding text, although the alt attribute should be marked as decorative or null.',
    'MISSING_ALT_LINK_MESSAGE': 'Image is being used as a link but is missing alt text! Please ensure alt text describes where the link takes you.',
    'MISSING_ALT_MESSAGE': 'Missing alt text! If the image conveys a story, mood, or important information - be sure to describe the image.',

    // Labels
    'LABELS_ARIA_LABEL_INPUT_MESSAGE': 'Input has an accessible name, although please ensure there is a visible label too.',
    'LABELS_ARIA_LABEL_INPUT_MESSAGE_INFO': 'The accessible name for this input is: <span class="sa11y-bold">%(ariaLabel)</span>',
    'LABELS_INPUT_RESET_MESSAGE': 'Reset buttons should <span class="sa11y-bold">not</span> be used unless specifically needed because they are easy to activate by mistake.',
    'LABELS_INPUT_RESET_MESSAGE_TIP': '<span class="sa11y-bold">Tip!</span> Learn why <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/" target="_blank">Reset and Cancel buttons pose usability issues. %(sa11yNewTab)</a>',
    'LABELS_MISSING_IMAGE_INPUT_MESSAGE': 'Image button is missing alt text. Please add alt text to provide an accessible name. For example: <em>Search</em> or <em>Submit</em>.',
    'LABELS_MISSING_LABEL_MESSAGE': 'There is no label associated with this input. Please add an <span class="sa11y-kbd">id</span> to this input, and add a matching <span class="sa11y-kbd">for</span> attribute to the label.',
    'LABELS_NO_FOR_ATTRIBUTE_MESSAGE': 'There is no label associated with this input. Add a <span class="sa11y-kbd">for</span> attribute to the label that matches the <span class="sa11y-kbd">id</span> of this input.',
    'LABELS_NO_FOR_ATTRIBUTE_MESSAGE_INFO': 'The ID for this input is: <span class="sa11y-bold">id=&#34;%(t)&#34;</span>',

    // Embedded content
    'EMBED_AUDIO': 'Please ensure to provide a <span class="sa11y-bold">transcript for all podcasts.</span> Providing transcripts for audio content is a mandatory Level A requirement. Transcripts support people who are D/deaf or hard-of-hearing, but can benefit everyone. Consider placing the transcript below or within an accordion panel.',
    'EMBED_GENERAL_WARNING': 'Unable to check embedded content. Please make sure that images have alt text, videos have captions, text has sufficient contrast, and interactive components are <a href="https://webaim.org/techniques/keyboard/" target="_blank">keyboard accessible. %(sa11yNewTab)</a>',
    'EMBED_MISSING_TITLE': 'Embedded content requires an accessible name that describes its contents. Please provide a unique <span class="sa11y-kbd">title</span> or <span class="sa11y-kbd">aria-label</span> attribute on the <span class="sa11y-kbd">iframe</span> element. Learn more about <a href="https://dequeuniversity.com/tips/provide-iframe-titles" target="_blank">iFrames. %(sa11yNewTab)</a>',
    'EMBED_VIDEO': 'Please ensure <span class="sa11y-bold">all videos have closed captioning.</span> Providing captions for all audio and video content is a mandatory Level A requirement. Captions support people who are D/deaf or hard-of-hearing.',

    // Contrast
    'CONTRAST_ERROR_MESSAGE': 'This text does not have enough contrast with the background. The contrast ratio should be at least 4.5:1 for normal text and 3:1 for large text.',
    'CONTRAST_ERROR_MESSAGE_INFO': 'The contrast ratio is <span class="sa11y-red-text sa11y-bold">%(cratio)</span> for the following text: <span class="sa11y-bold sa11y-red-text">%(nodetext)</span>',
    'CONTRAST_WARNING_MESSAGE': 'The contrast of this text is unknown and needs to be manually reviewed. Ensure the text and the background have strong contrasting colours. The contrast ratio should be at least 4.5:1 for normal text and 3:1 for large text.',
    'CONTRAST_WARNING_MESSAGE_INFO': 'Please review contrast of the following text:<br><span class="sa11y-bold">%(nodetext)</span>',

    // Readability
    'READABILITY_NOT_ENOUGH_CONTENT_MESSAGE': 'Not enough content to calculate readability score.',
    'READABILITY_NO_P_OR_LI_MESSAGE': 'Unable to calculate readability score. No paragraph <span class="sa11y-badge">&lt;p&gt;</span> or list content <span class="sa11y-badge">&lt;li&gt;</span> found.',

    // QA
    'QA_BAD_ITALICS': 'Bold and italic tags have semantic meaning, and should <span class="sa11y-bold">not</span> be used to highlight entire paragraphs. Bolded text should be used to provide strong <span class="sa11y-bold">emphasis</span> on a word or phrase. Italics should be used to highlight proper names (i.e. book and article titles), foreign words, quotes. Long quotes should be formatted as a blockquote.',
    'QA_BAD_LINK': 'Bad link found. Link appears to point to a development environment. This link points to: <span class="sa11y-bold sa11y-red-text">$(el)</span>',
    'QA_BLOCKQUOTE_MESSAGE': 'Is this a heading? <span class="sa11y-bold sa11y-red-text">%(bqHeadingText)</span>',
    'QA_BLOCKQUOTE_MESSAGE_TIP': 'Blockquotes should be used for quotes only. If this is intended to be a heading, change this blockquote to a semantic heading (e.g. Heading 2 or Heading 3).',
    'QA_FAKE_HEADING': 'Is this a heading? <span class="sa11y-bold sa11y-red-text">%(boldtext)</span>',
    'QA_FAKE_HEADING_INFO': 'A line of bold text might look like a heading, but someone using a screen reader cannot tell that it is important or jump to its content. Bolded text should never replace semantic headings (Heading 2 to Heading 6).',
    'QA_PAGE_LANGUAGE_MESSAGE': 'Page language not declared! Please <a href="https://www.w3.org/International/questions/qa-html-language-declarations" target="_blank">declare language on HTML tag.</a>',
    'QA_PDF_COUNT': 'PDFs are considered web content and must be made accessible as well. PDFs often contain issues for people who use screen readers (missing structural tags or missing form field labels) and people who have low vision (text does not reflow when enlarged). <ul><li>If this is a form, consider using an accessible HTML form as an alternative.</li><li>If this is a document, consider converting it into a web page.</li></ul><br>Otherwise, please check <span class="sa11y-bold sa11y-red-text">%(pdfCount)</span> <a href="https://www.adobe.com/accessibility/products/acrobat/using-acrobat-pro-accessibility-checker.html" target="_blank">PDF(s) for accessibility in Acrobat DC.</a>',
    'QA_SHOULD_BE_LIST': 'Are you trying to create a list? Possible list item found: <span class="sa11y-bold sa11y-red-text">%(firstPrefix)</span>',
    'QA_SHOULD_BE_LIST_TIP': 'Make sure to use semantic lists by using the bullet or number formatting buttons instead. When using a semantic list, assistive technologies are able to convey information such as the total number of items and the relative position of each item in the list. Learn more about <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists" target="_blank">semantic lists.</a>',
    'QA_UPPERCASE_WARNING': 'Found all caps. Some screen readers may interpret all caps text as an acronym and will read each letter individually. Additionally, some people find all caps more difficult to read and it may give the appearance of SHOUTING.',

    // Tables
    'TABLES_EMPTY_HEADING': 'Empty table header found! Table headers should <em>never</em> be empty. It is important to designate row and/or column headers to convey their relationship. This information provides context to people who use assistive technology. Please keep in mind that tables should be used for tabular data only.',
    'TABLES_EMPTY_HEADING_INFO': 'Learn more about <a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank">accessible tables.</a>',
    'TABLES_MISSING_HEADINGS': 'Missing table headers! Accessible tables need HTML markup that indicates header cells and data cells which defines their relationship. This information provides context to people who use assistive technology. Tables should be used for tabular data only.',
    'TABLES_MISSING_HEADINGS_INFO': 'Learn more about <a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank">accessible tables.</a>',
    'TABLES_SEMANTIC_HEADING': 'Semantic headings such as Heading 2 or Heading 3 should only be used for sections of content; <span class="sa11y-bold">not</span> in HTML tables. Indicate table headings using the <span class="sa11y-bold">th</span> element instead.',
    'TABLES_SEMANTIC_HEADING_INFO': 'Learn more about <a href="https://www.w3.org/WAI/tutorials/tables/" target="_blank">accessible tables.</a>',
  }
};

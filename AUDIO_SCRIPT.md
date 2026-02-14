Welcome to WebbyCrown Solutions!

Today, we'll explore our Advanced Fields plugin — a professional collection of custom field types for Strapi CMS that provide advanced functionality with comprehensive validation and user-friendly interfaces.

Let me walk you through the field types and explain what each one does.

Content-Type Builder: Advanced Fields

When you navigate to Content-Type Builder and add a new field, you'll find three Advanced Fields available.

Advanced Input

Advanced Input — This is a professional-grade text input field with comprehensive validation options. Configure minimum and maximum character lengths, regex patterns for format validation, custom error messages, default values, placeholders, and field notes. You can also mark fields as required, unique, or private to hide them from API responses.

Advanced Checkbox

Advanced Checkbox — This unified checkbox field supports both single and multiple selection modes. Define dynamic options using the value-pipe-label format, set minimum and maximum choice limits, configure default selections, and choose from vertical, horizontal, or grid layouts. Add custom error messages and field notes to guide content creators.

Advanced Radio

Advanced Radio — This flexible radio button field supports both single and multiple selection types. Configure dynamic options, set selection limits, choose layouts, and add default selections. Custom validation messages and field notes help ensure proper data entry.

Configuration Overview

All three field types share common configuration options:

Basic Settings — Required field, unique field, length constraints, and default values

Advanced Settings — Regex patterns, placeholders, custom error messages, field notes, and private field options

Layout Options — For checkbox and radio fields, choose vertical, horizontal, or grid layouts

Validation — Real-time validation with custom error messages for better user experience

Technical Overview

The plugin uses Strapi's custom fields API to register three field types:

Advanced Input — Stores data as strings with server-side validation

Advanced Checkbox — Stores data as JSON arrays or single values with choice validation

Advanced Radio — Stores data as JSON arrays or single values with selection limits

All fields integrate seamlessly with Strapi's REST and GraphQL APIs, support internationalization, and provide real-time validation feedback in the admin panel.

And that's a quick overview of the Advanced Fields plugin for Strapi CMS.

Thank you for watching!

For more information, visit www.webbycrown.com

or contact us at support@webbycrown.com

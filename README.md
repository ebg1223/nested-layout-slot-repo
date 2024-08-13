# Demo repo of nested layout slot question.

Video:


https://github.com/user-attachments/assets/ff0ddf58-fee2-4156-b5bf-b3d4ce356b32



## /desiredbehavior

- how most people think slot nested layouts work
- you can implement this behavior by adding to each page, but this defeats the purpose of slot...

## /nonnested

- page1 and page2 are individual pages, that push onto the top of the stack.
- back button functions from page2->page1, from page1->home.
- navigating from page1 to page2, then navigating to /nonnested/page1 will pop page2 off the stack going back to page1.

## /nested

Expected Behavior From Docs:

- Same behavior as nonnested, but with a shared header component showing on all pages

Actual:

- a single "page" is pushed to the stack, whether navigating to page1 or page2
- navigating from page1->page2 does not push anything to the stack. without a button on the page itself, there would be no way to get back to page1.
- going back, even if already navigated from page1->page2 goes straight to homescreen.

## /nestedstack

- "Nested Stack" text shows correctly, but between stacks.
- You can hide the main stack header for these pages, but then the "Nested Stack" would still be above the stack header, and no way to return to the previous page.
- you can hide the nested stack header, but then no way to navigate page2->page1.

## /nestedstackwithlayout

- header in the correct spot within the nested stack
- same as /nested, page1 and page2 do not push separate pages to the stack.

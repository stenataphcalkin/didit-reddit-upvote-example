My troubles kicked off with some outside issues, as I was setting up a new router last night. At first, I thought it may have been an issue with the port settings on the new device that I hadn't configured. I checked firewall rules, port forwarding, etc. Turns out, I was falling into confirmation bias—thinking the newest thing must be causing all the trouble.

Finally, it clicked that hardware wasn't the issue. The fail messages were still happening after I left my local network. That pointed me back to the application or database settings.

After reviewing this, I found that the real problem was my database set up as I used a raw database connection string instead of one that points to the pooler. 

This inhibited my Auth process, however, once corrected I was able to move on.

Following this, it did lead to some additional issues with being unable to fetch the user.name and had to user optional chaining to avoid any crashes that would break the app.

One more thing I missed was updating the OAuth redirect URI from localhost to my live app URL. As oAuth needs the exact URL for where to send users after login this would have been an issue in the live environment. 

Reminder for future: DOUBLE CHECK YOU HAVE THE RIGHT POOLER FROM THE START TO MINIMISE HEADACHES!

The rest of the afternoon was spent throwing myself into the rabbit hole of TipTap, reading up on it, additional resources and spiraling off into other resources that would be beneficialfor the future to add to my resoruce library.

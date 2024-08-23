This repo must be used in conjunction with [`klickers/mylog`](https://github.com/klickers/mylog). I made this as an activity log for myself, so I could look back on the things I accomplished during the day. (I don't use this to track "wasted" or neutral time; I already have Toggl and Activity Watch for that.)

## Running this repo

Make sure to update the `keystone.ts` file if needed before starting the app.

```
npx keystone dev
```

## Details & warnings

The names for tables aren't really intuitive and are slightly messy. I am still working on cleaning things up!

-   `LogEntry`: an entry into the activity log
-   `LogType` (really should be LogGroupType): such as Project, Book, etc.
-   `LogCategory` (really should be LogGroupTag): such as Web Development, Freelance Work, etc.
-   `LogGroup`: think of it as a table for projects, like "2024 Q4 Report" (how boring ToT) or "My Activity Log App"

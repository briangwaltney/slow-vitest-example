### Hot reload failure example

This minimal reproduction shows vitest not hot reloading as expected.

Sporadically, renaming functions, changing implementations, and just overall adjusting the code does not cause the tests to rerun properly.

Sometimes it works, sometimes it doesn't. As soon as it stops working, you can go to the terminal running vitest, press `a` to rerun all tests and you will continue to get the error.

Upon returning to the code, you can save the file, and the tests will rerun properly.

The same issues show up when using WallabyJs.

Screen recording included in repo as failureExample.mov.
# Tangerine

A desktop application enabling P2P connections between two or more devices on different networks.

## How to Install

1. Go to the [Releases](https://github.com/Purple-Gem-Studio/tangerine/releases) page.
2. Click on the `Assets` dropdown.
3. Select the `.zip` file with your platform's name to download the app for your platform.
4. Double-click the executable to run Tangerine.

## How to uninstall

Delete the executable.
For now, there is an additional step which has to be done manually, although as of the next version, this step won't be required anymore.
Open a terminal and run the following command:

```sh
npm un -g spork
```

*(Spork is an additional dependency that must be globally installed for Tangerine to function properly, and as such, I've created [Tangerine Pie](https://github.com/spicy-ashes/tangerine-pie) to bring the features provided by the Spork CLI to Node.js as a high-level API. This makes the global dependency no longer necessary, and it can be safely uninstalled when you download any release after - **but not including** - 1.0.0-alpha.4.2.)*

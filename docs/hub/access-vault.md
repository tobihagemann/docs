---
id: access-vault
title: Working with Vaults
sidebar_position: 4
---

# Working with Vaults

To encrypt your data securely with Cryptomator Hub vaults, you need the Cryptomator app for your OS.
Cryptomator runs on Windows, macOS, Linux, Android and iOS.
You can download the version for your OS from [cryptomator.org](https://cryptomator.org/downloads/).

This section describes exemplarily how to unlock a vault in the Desktop app.
Android and iOS work analogously.

:::note
Currently, our desktop and iOS version supports Cryptomator Hub vaults.
We are working on adding support for Android.
:::

As described in [open an existing vault](../desktop/adding-vaults#open-an-existing-vault), you should have already added the vault to the vault list, e.g., by selecting the `vault.cryptomator` file.

## Unlocking a Vault {#unlocking-a-vault}

### 1. Click Unlock {#unlocking-a-vault-click-unlock}

To unlock the vault, click on the large `Unlock` button in the center of Cryptomator's main window.

![Click "Unlock" to unlock a Hub vault with the Desktop app](../../static/img/hub/unlock-click-unlock.png)

### 2. Authenticate {#unlocking-a-vault-authenticate}

Cryptomator should open your default browser for authentication. If you're not already logged in, you need to provide your user credentials, e.g., by entering your username and password or by inserting your key when WebAuthn is enabled.

![After your browser asks for credentials, enter your username and password](../../static/img/hub/unlock-authenticate.png)

### 3. Account Setup {#unlocking-a-vault-setup-user}

If this is the first time you log into Hub, Cryptomator and Cryptomator Hub requests you to [set up your account](your-account#setup).

Desktop

![Cryptomator requests to setup your user account](../../static/img/hub/unlock-setup-required-desktop.png)

Hub

![Hub requests to setup your user account](../../static/img/hub/unlock-setup-required-hub.png)

When you finished the account setup in Hub, unlock the vault again.

### 4. Register Device {#unlocking-a-vault-add-device}

If you just did setup your account, a vault owner needs to grant you access for the requested vault as described [here](vault-management#updating-permission). Retry unlocking the vault after the vault owner granted you access.

![Access is denied since it has not been granted by a vault owner yet](../../static/img/hub/unlock-access-denied.png)

If you connect to Hub with this device for the first time, you need to register it.

Desktop

![Register your device by entering the setup code and a name for it](../../static/img/hub/unlock-register-device-desktop.png)

Hub

![Hub requests device registration](../../static/img/hub/unlock-register-device-hub.png)

Enter a name for the device to identify it later on and the [Account Key](your-account#account-key) which was generated during the account setup. You can also find it in the [account settings](your-account#profile).

After that, you will see a confirmation dialog, unlock the vault again.

### 5. Vault Unlocked {#unlocking-a-vault-vault-unlocked}

You are all set up and an unlock should be successful from now on. You can then reveal the vault's contents as usual.

Desktop

![Desktop shows unlock successful](../../static/img/hub/unlock-successfull-desktop.png)

Hub

![Hub shows unlock successful](../../static/img/hub/unlock-successfull-hub.png)

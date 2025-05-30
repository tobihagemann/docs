---
id: vault-recovery
title: Vault Recovery
sidebar_position: 7
---

# Vault Recovery

This section contains instructions for recovering Cryptomator Hub vaults using the vault recovery key.

Cryptomator Hub vaults can be recovered in two different ways:

1. [Online Recovery](#online-recovery) - Reestablishes Hub controlled access management for a vault in case the vault admin password got lost
2. [Offline Recovery](#offline-recovery) - Restores vault data access of a hub managed vault in case of a disaster (e.g. Cryptomator Hub is down and immediate data access is needed)

## Online Recovery {#online-recovery}

This recovery method should be used, if the vault admin password got lost.
In the process, a new Hub vault with the same key material as the "to-be-recovered" vault is created.
The membership information of the old vault cannot be migrated, hence all users/groups need to be added manually afterwards.

Requirements:

* Access to Cryptomator Hub
* Write access to the storage location of the vault
* Access to the recovery key of the vault

In Cryptomator Hub navigate to the vault list, click `Add` and `Recover Existing`

![Vault list add drop down](../../static/img/hub/vault-onlinerecovery-step1.png)

Enter the recovery key for the vault you want to restore. If you enter a recovery key from a different vault, the recovery will not work.

Proceed with `Restore Vault`.

![Vault enter recovery key](../../static/img/hub/vault-onlinerecovery-step2.png)

Enter a new vault name, description and vault admin password. The new vault admin password is required to grant or revoke access to the vault.

![Creating a vault using recovery key](../../static/img/hub/vault-onlinerecovery-step3.png)

If successful, a new vault has been created. Proceed as follows:

1. Click on `Download zipped vault folder` of the new created vault
2. Unzip the downloaded folder
3. Copy the file `vault.cryptomator` of the unzipped folder
4. Browse locally on the device, directly in the cloud or network storage to the location of the vault folder. In that folder, replace the existing `vault.cryptomator` file with the one you just copied.

Afterwards, you can manage vault data access over the newly created vault in Hub.
You will need to regrant permission to the vault members, and then the vault can be unlocked by the team.

## Offline Recovery {#offline-recovery}

This recovery method should only be used in an emergency, i.e. immediate data access is needed but Cryptomator Hub not reachable.
In the process, the authentication needed to unlock the vault is changed from Hub- to password-based by creating/changing vault configuration files.
If these changes are synchronized to the online storage, everyone with the chosen password can unlock and access the vault data without requiring a connection to Cryptomator Hub.
If you don't want that, ensure that the vault is stored at an offline location without any kind of synchronization.

:::note
This process is reversible. See the [end of this section](#offline-reverse).
:::

Requirements:

* Access to the Cryptomator desktop application
* Write access to the storage location of the vault
* Access to the recovery key of the vault

Open the Cryptomator desktop app,  right-click on the vault you want to restore in the vault list, click `Show vault options` in the opened context menu.
In the opening window, select the `Recovery`, read the label description and click the `Convert to Password-Based Vault` button.

![Vault recovery convert to Password-Based-Vault](../../static/img/hub/vault-offlinerecovery-step1.png)

Enter the recovery key for the vault you want to restore. If you enter a recovery key from a different vault, the recovery will not work. Proceed with `Next`.

![Convert vault enter recovery key](../../static/img/hub/vault-offlinerecovery-step2.png)

In the next step choose a [good password](../security/best-practices#good-passwords) used for unlocking the vault.
Cryptomator requires at least 8 characters but we recommend you to use a longer phrases such as pass-sentences.
The bar below the password field estimates the strength of your password.

![Convert vault enter new password](../../static/img/hub/vault-offlinerecovery-step3.png)

If the conversion was successful, a success message is shown.
You can close the dialog box.
This vault is now converted to a password-based vault.

![Convert vault successful](../../static/img/hub/vault-offlinerecovery-step4.png)

After the conversion, when unlocking the vault, you are prompted for a password and only the one chosen in the previous step leads to a successful unlock.

![Unlock converted Vault](../../static/img/hub/vault-offlinerecovery-step5.png)

## Reversing Offline Conversion {#offline-reverse}

You can reverse the offline conversion.
In order to do that, remove the following files:

* all files named or starting with `masterkey.cryptomator`
* `vault.cryptomator`
* the *most recent* `vault.cryptomator.XXXXXXXX.bkup`

Then restore the original config by renaming `vault.cryptomator.XXXXXXXX.bkup` to `vault.cryptomator`.
You can then unlock the vault again using the Cryptomator Hub.

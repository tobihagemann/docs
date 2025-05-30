---
id: access-vault
title: Working with Vaults
sidebar_position: 4
---

# Working with Vaults

This section shows you how to work with a vault like view its content, move files or access it with other applications.

## Unlock Vault

If you want to access the data inside a vault, you have to unlock it by selecting it.

![How to unlock a vault with Android](../../static/img/android/unlock-vault-0-select.png)

In the next step, you have to unlock the vault using the password. If the device supports fingerprint authentication and you've activated it in the settings for this vault, you will be prompted to unlock using fingerprint. How to setup fingerprint authentication will be documented in a separate chapter.

![How to unlock a vault with Android](../../static/img/android/unlock-vault-1-using-password.png )

![How to unlock a vault with Android](../../static/img/android/unlock-vault-2-using-fingerprint.png)

After providing the credentials, the vault gets unlocked and opened.

![How to unlock a vault with Android](../../static/img/android/unlock-vault-3-loading.png)

![How to unlock a vault with Android](../../static/img/android/unlock-vault-4-unlocked.png)

You're now able to edit the content of the vault.

## Lock Vault

To lock an unlocked vault, there are several ways to do this:

* use the lock button in the vault list ①
* use the lock button in the notification ②
* use the lock button in the vault actions ③ and ④

![How to lock a vault with Android](../../static/img/android/lock-vault-0-lock.png)

![How to lock a vault with Android](../../static/img/android/lock-vault-1-notification.png)

![How to lock a vault with Android](../../static/img/android/lock-vault-2-lock-start.png)

![How to lock a vault with Android](../../static/img/android/lock-vault-3-select-lock.png)

All of the possibilities will result in the locked vault.

![How to lock a vault with Android](../../static/img/android/lock-vault-4-finish.png)

:::note
The auto-lock timeout specified in the settings will lock the vault if Cryptomator is in background. Furthermore if not changed in settings, the vault gets locked if the screen turns off.

:::

## View and Edit File

Start the view and edit process by clicking on a file.
Finish the editing or viewing using the back button of the device until you're back in Cryptomator.
If the content has changed, the upload process starts.

![How to edit a file with Android](../../static/img/android/edit-file.gif)

## Rename File or Folder

To change the name of a specific file or folder in Cryptomator, you select the `V` ① next to the file or folder  and choose *Rename* ②.

![How to rename a vault with Android](../../static/img/android/rename-vault-0-start.png)

![How to rename a vault with Android](../../static/img/android/rename-vault-1-select-rename.png)

Choose a new name and confirm using the `RENAME` button.

![How to rename a vault with Android](../../static/img/android/rename-vault-3-renaming.png)

![How to rename a vault with Android](../../static/img/android/rename-vault-4-finish.png)

## Move File or Folder

To move a file or a folder into another folder, you select the `V` next to the file or folder ① and choose *Move* ②.

![How to move a file or folder with Android](../../static/img/android/move-file-0-start.png)

![How to move a file or folder with Android](../../static/img/android/move-file-1-select-move.png)

Choose a new location by selecting a folder or by pressing the back button of your phone to navigate to the parent folder.

![How to move a file or folder with Android](../../static/img/android/move-file-2-move-root.png)

![How to move a file or folder with Android](../../static/img/android/move-file-3-move-target.png)

Confirm using the `MOVE` button.

![How to move a file or folder with Android](../../static/img/android/move-file-3-moving.png)

![How to move a file or folder with Android](../../static/img/android/move-file-4-finish.png)

While moving, you can use the ③ button to create a new folder in the current folder.

![How to move a file or folder with Android](../../static/img/android/move-file-5-move-folder-hint.png)

## Delete File or Folder

To delete a specific file or folder in Cryptomator, you select the `V` next to the file or folder ① and choose *Delete* ②.

![How delete a file or folder with Android](../../static/img/android/delete-file-0-start.png)

![How delete a file or folder with Android](../../static/img/android/delete-file-1-select-delete.png)

Confirm the deletion process using the `DELETE` button.

![How to delete a file or folder with Android](../../static/img/android/delete-file-2-confirmation.png)

![How to delete a file or folder with Android](../../static/img/android/delete-file-3-deleting.png)

![How to delete a file or folder with Android](../../static/img/android/delete-file-4-finish.png)

:::note
By deleting a folder, all subfolders and files inside are deleted recursively.

:::

## Export File or Folder

To export a specific file or folder in Cryptomator, you select the `V` next to the file or folder ① and choose *Export* ②.

![How export a file or folder with Android](../../static/img/android/export-file-0-start.png)

![How export a file or folder with Android](../../static/img/android/export-file-1-select-export.png)

Chose the target location where the file or folder should be exported to.

![How to export a file or folder with Android](../../static/img/android/export-file-2-choose-location.png)

![How to export a file or folder with Android](../../static/img/android/export-file-3-exporting.png)

![How to export a file or folder with Android](../../static/img/android/export-file-4-finish.png)

## Share File with Other App

To share a specific file or folder in Cryptomator with another app, you select the `V` next to the file or folder ① and choose Share ②.

![How share a file or folder with Android](../../static/img/android/share-file-0-start.png)

![How share a file or folder with Android](../../static/img/android/share-file-1-select-share.png)

Choose the target app in which you will use the file or folder.

![How to share a file or folder with Android](../../static/img/android/share-file-2-select-app.png)

:::note
By sharing a file or folder from Cryptomator with Cryptomator, you can copy content from one vault to another one.

:::

## Share File with Cryptomator

You can share files from another app with Cryptomator.
We use as example the Files app from Android.

You select the file(s) to share by long clicking on it ①.
Press the share button ② to choose to share these file(s) and select *Cryptomator* ③.

![How share a file or folder with Android](../../static/img/android/share-with-cm-0-start.png)

![How share a file or folder with Android](../../static/img/android/share-with-cm-1-choose-cm.png)

Choose the vault ⑤ and optionally specify the target folder in the vault ④ (default is the root).

![How to share a file or folder with Android](../../static/img/android/share-with-cm-2-select-vault.png)

Then the encryption and upload starts.

![How share a file or folder with Android](../../static/img/android/share-with-cm-3-uploading.png)

![How share a file or folder with Android](../../static/img/android/share-with-cm-4-finish.png)

## Search in Folder

Search for files or folders within the same folder using the magnifier ①.

![How to search in a vault with Android](../../static/img/android/search-0-start.png)

Now you can enter the pattern after which you want to search in this folder.

![How to search in a vault with Android](../../static/img/android/search-1-searched.png)

Using the `X` ② you can clear the pattern and after pressing it again, the filter mode is finished.

![How to search in a vault with Android](../../static/img/android/search-2-finish.png)

In the settings there are two options that influence the behavior of the search:

* Live search (disbaled by default)
* Search using glob pattern matching (disbaled by default)

For more information, see the Settings chapter.

## Sort Folder by...

![How to sort the content of a folder with Android](../../static/img/android/sort.gif)

## Fast scroll

![How to scroll fast through the content of a folder with Android](../../static/img/android/fast-scroll.gif)

If the folder contents are sorted by file size, the preview will show the file sizes accordingly. The same applies to the modification date.
---
id: sync-conflicts
title: Synchronization Conflicts
sidebar_position: 9
---

# Synchronization Conflicts

Working on encrypted data from multiple locations works the same as working on unencrypted data from multiple locations. If there is a synchronization conflict, it is handled similarly to how most cloud storage services deal with conflicts.

When a sync conflict occurs, cloud storage services typically create a conflict file by appending a suffix (e.g., `(1)`) to indicate that there was a conflict. You then need to determine which file to keep.

Cryptomator handles encrypted files in the same way. It detects synchronization conflicts and displays the conflicted file with a `(X)` suffix, where X is an integer.

:::note
Sync conflicts can happen in cloud storages for several reasons. In such cases, it is up to you to decide what to do with the conflicted files. It is recommended to manually check both files and determine which one to keep. If you conclude that both files are identical, you can delete one copy. The organization of your files is entirely in your hands.

:::

## Handling Sync Conflicts

1. When a sync conflict is detected, Cryptomator will display the conflicted file with a `(X)` suffix, where X is an increasing integer.
2. Manually review both the original and conflicted files.
3. Decide which file to keep based on your review.
4. If both files are identical, you can delete one of the copies to resolve the conflict.

By following these steps, you can effectively manage synchronization conflicts and ensure that your data remains consistent across multiple locations.

## Example

Suppose you have a file named `document.txt` in your vault. In the encrypted vault, this file might be represented with an encrypted name such as `5TyvCyF255sRtfrIv...83ucADQ==.c9r`.

If a synchronization conflict occurs, it will happen on the encrypted filename. Cryptomator detects unexpected patterns in the encrypted filename and handles the conflict accordingly.

For example, if there is a conflict with `5TyvCyF255sRtfrIv...83ucADQ== (1).c9r`, Cryptomator will decrypt the decryptable part of the filename and rename the file to include a conflict suffix. The conflicted file might be renamed to something like `FHTa55bH...sUfVDbEb0gTL9hZ8nho.c9r`, which corresponds to `document (1).txt`.
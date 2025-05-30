#!/bin/bash

echo "=== DETAILED MIGRATION VERIFICATION REPORT ==="
echo "Generated on: $(date)"
echo ""

OLD_BASE="/Users/saibot/Developer/github.com/cryptomator/docs/source"
NEW_BASE="/Users/saibot/Developer/Stuff/docs-new/docs"

echo "## FILE COUNT COMPARISON"
echo "RST files in old project: $(find "$OLD_BASE" -name "*.rst" | wc -l)"
echo "MD files in new project: $(find "$NEW_BASE" -name "*.md" | wc -l)"
echo ""

echo "## MISSING FILES ANALYSIS"
echo "### Files in OLD but not in NEW:"

# Check each RST file for corresponding MD file
find "$OLD_BASE" -name "*.rst" | while read rst_file; do
    # Get relative path and convert to MD
    rel_path=$(echo "$rst_file" | sed "s|$OLD_BASE/||" | sed 's|\.rst$|.md|')
    
    # Special case for index.rst -> intro.md
    if [[ "$rel_path" == "index.md" ]]; then
        rel_path="intro.md"
    fi
    
    md_file="$NEW_BASE/$rel_path"
    
    if [[ ! -f "$md_file" ]]; then
        echo "❌ MISSING: $rst_file -> $md_file"
    fi
done

echo ""
echo "### Files in NEW but not in OLD:"
find "$NEW_BASE" -name "*.md" | while read md_file; do
    # Get relative path and convert to RST
    rel_path=$(echo "$md_file" | sed "s|$NEW_BASE/||" | sed 's|\.md$|.rst|')
    
    # Special case for intro.md -> index.rst
    if [[ "$rel_path" == "intro.rst" ]]; then
        rel_path="index.rst"
    fi
    
    rst_file="$OLD_BASE/$rel_path"
    
    if [[ ! -f "$rst_file" ]]; then
        echo "❓ EXTRA: $md_file (no corresponding RST)"
    fi
done

echo ""
echo "## CONTENT LENGTH COMPARISON"
echo "| Section | RST Lines | MD Lines | Difference |"
echo "|---------|-----------|----------|------------|"

# Compare file sizes by section
for section in android desktop help hub ios misc security; do
    if [[ -d "$OLD_BASE/$section" ]]; then
        rst_lines=$(find "$OLD_BASE/$section" -name "*.rst" -exec wc -l {} + 2>/dev/null | tail -1 | awk '{print $1}' || echo "0")
        md_lines=$(find "$NEW_BASE/$section" -name "*.md" -exec wc -l {} + 2>/dev/null | tail -1 | awk '{print $1}' || echo "0")
        diff=$((md_lines - rst_lines))
        echo "| $section | $rst_lines | $md_lines | $diff |"
    fi
done

echo ""
echo "=== END REPORT ==="

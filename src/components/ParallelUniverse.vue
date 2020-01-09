<template>
  <portal-target name="universe" multiple></portal-target>
</template>
<script>
function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
    if (styleSheet.cssRules) {
      // true for inline styles
      const newStyleEl = sourceDoc.createElement("style");

      Array.from(styleSheet.cssRules).forEach(cssRule => {
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    } else if (styleSheet.href) {
      // true for stylesheets loaded from a URL
      const newLinkEl = sourceDoc.createElement("link");

      newLinkEl.rel = "stylesheet";
      newLinkEl.href = styleSheet.href;
      targetDoc.head.appendChild(newLinkEl);
    }
  });
}

export default {
  data() {
    return {
      universe: null
    };
  },
  mounted() {
    this.universe = window.open(
      "",
      "_blank",
      "toolbar=yes,width=600,height=600,left=200,top=200"
    );
    this.universe.document.title = "Multiverse";
    copyStyles(document, this.universe.document);
    this.universe.document.body.appendChild(this.$el);
  },
  destroyed() {
    this.universe.close();
  }
};
</script>

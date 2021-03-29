import kebabCase from 'lodash/kebabCase';
import type { VueConstructor } from 'vue';

/**
 * Default plugin parameters
 */
const defaults = {
  /**
   * Enable plugin
   */
  enabled: true,
};

/**
 * Generate comments
 *
 * @example
 * ```ts
 * generateComment('CompA', 'src/components/comp-a.vue') =>
 * {
 *   startComment: '<comp-a src="src/components/comp-a.vue">'
 *   endComment: '</comp-a>'
 * }
 * ```
 *
 * @param tagName Component tag name
 * @param filePath Path to component source file
 */
function generateComment(tagName?: string, filePath?: string) {
  let startComment = '';
  let endComment = '';

  if (tagName) {
    startComment += `<${tagName}>`;
    endComment += `</${tagName}>`;
  }

  if (filePath) {
    startComment = startComment.replace('>', ` src="${filePath}">`);
  }

  return { endComment, startComment };
}

/**
 * Plugin installation
 *
 * @param vue
 * @param options
 */
function install(vue: VueConstructor, options: typeof defaults) {
  const config = { ...defaults, ...options };

  vue.mixin({
    beforeDestroy() {
      if (config.enabled && this.$$COMMENT) {
        this.$$COMMENT.START.remove();
        this.$$COMMENT.END.remove();
      }
    },

    mounted() {
      if (this.$el && config.enabled) {
        const comments = generateComment(
          kebabCase((this as any).$vnode?.componentOptions?.tag),
          (this as any).$vnode?.componentInstance?.$options?.__file,
        );

        if (comments.startComment && comments.endComment) {
          this.$$COMMENT = {
            END: document.createComment(` ${comments.endComment} `),
            START: document.createComment(` ${comments.startComment} `),
          };

          this.$el.before(this.$$COMMENT.START);
          this.$el.after(this.$$COMMENT.END);
        }
      }
    },
  });
}

export default {
  defaults,
  install,
};

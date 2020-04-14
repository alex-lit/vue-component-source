import kebabCase from 'lodash/kebabCase';

/**
 * Default plugin parameters
 */
const defaults = {
  /**
   * Is the plugin included?
   */
  enabled: true,
};

/**
 * Generates commens
 *
 * @example
 * generateComment('CompA', 'src/components/comp-a.vue') =>
 * {
 *   startComment: '<comp-a src="src/components/comp-a.vue">'
 *   endComment: '</comp-a>'
 * }
 *
 * @param tagName Component tag name
 * @param filePath Path to component source file
 */
const generateComment = (
  tagName: string | undefined,
  filePath: string | undefined,
): {
  startComment: string;
  endComment: string;
} => {
  let startComment: string = '';
  let endComment: string = '';

  if (tagName) {
    startComment += `<${tagName}>`;
    endComment += `</${tagName}>`;
  }

  if (filePath) {
    startComment = startComment.replace('>', ` src="${filePath}">`);
  }

  return { startComment, endComment };
};

/**
 * Plugin installation
 *
 * @param Vue
 * @param options
 */
function install(Vue, options) {
  const config = { ...defaults, ...options };

  Vue.mixin({
    mounted() {
      if (this.$el && config.enabled) {
        /** Comments */
        const comments = generateComment(
          kebabCase((this as any).$vnode?.componentOptions?.tag),
          (this as any).$vnode?.componentInstance?.$options?.__file,
        );

        /** Insert comments in the DOM */
        if (comments.startComment && comments.endComment) {
          this.$$COMMENT = {
            START: document.createComment(` ${comments.startComment} `),
            END: document.createComment(` ${comments.endComment} `),
          };
          this.$el.before(this.$$COMMENT.START);
          this.$el.after(this.$$COMMENT.END);
        }
      }
    },
    beforeDestroy() {
      /** Removing comments */
      if (config.enabled && this.$$COMMENT) {
        this.$$COMMENT.START.remove();
        this.$$COMMENT.END.remove();
        Vue.delete(this.$$COMMENT);
      }
    },
  });
}

export default {
  install,
  defaults,
};

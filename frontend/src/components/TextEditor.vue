<script setup>
import { watch } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Strike from "@tiptap/extension-strike";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Blockquote from "@tiptap/extension-blockquote";
import FormatBold from "vue-material-design-icons/FormatBold.vue";
import FormatItalic from "vue-material-design-icons/FormatItalic.vue";
import FormatUnderline from "vue-material-design-icons/FormatUnderline.vue";
import FormatListNumbered from "vue-material-design-icons/FormatListNumbered.vue";
import FormatListBulleted from "vue-material-design-icons/FormatListBulleted.vue";
import FormatStrikethrough from "vue-material-design-icons/FormatStrikethrough.vue";
import FormatAlignLeft from "vue-material-design-icons/FormatAlignLeft.vue";
import FormatAlignCenter from "vue-material-design-icons/FormatAlignCenter.vue";
import FormatAlignRight from "vue-material-design-icons/FormatAlignRight.vue";
import FormatAlignJustify from "vue-material-design-icons/FormatAlignJustify.vue";
import FormatQuoteClose from "vue-material-design-icons/FormatQuoteClose.vue";

const props = defineProps({
  modelValue: String,
});

watch(
  () => props.modelValue,
  (value) => {
    const isSame = editor.value.getHTML() === value;
    if (!isSame) {
      editor.value.commands.setContent(value, false);
    }
  }
);

const emit = defineEmits(["update:modelValue"]);

const editor = useEditor({
  content: props.modelValue,
  onUpdate: () => {
    //console.log(editor.getHTML());
    emit("update:modelValue", editor.value?.getHTML());
  },
  editorProps: {
    attributes: {
      class:
        "border border-gray-400 p-4 min-h-[30rem] max-h-[30rem] overflow-y-auto outline-none prose max-w-none",
    },
  },

  extensions: [
    StarterKit,
    Bold,
    Italic,
    Underline,
    Strike,
    BulletList,
    OrderedList,
    Blockquote.configure({
      HTMLAttributes: {
        class:
          "border-left: 4px solid #ccc; padding: 10px 20px; font-style: italic; background-color: #f9f9f9; margin: 20px 0",
      },
    }),

    Heading.configure({
      levels: [1, 2, 3],
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
  ],
});
</script>

<template>
  <div v-if="editor">
    <section
      class="buttons flex items-center flex-wrap gap-x-4 border-t border-l border-r border-gray-400 p-4"
    >
      <button
        type="button"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'bg-gray-500': editor.isActive('bold') }"
      >
        <FormatBold />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <FormatItalic />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': editor.isActive('underline') }"
      >
        <FormatUnderline />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <FormatStrikethrough />
      </button>

      <button
        type="button"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <FormatListBulleted />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <FormatListNumbered />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
      <button
        type="button"
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      >
        <FormatAlignLeft />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      >
        <FormatAlignCenter />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      >
        <FormatAlignRight />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().setTextAlign('justify').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
      >
        <FormatAlignJustify />
      </button>
      <button
        type="button"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <FormatQuoteClose />
      </button>
    </section>
  </div>
  <EditorContent :editor="editor" />
</template>

<style>
.tiptap {
  :first-child {
    margin-top: 0;
  }

  blockquote {
    border-left: 3px solid var(--gray-3);
    margin: 1.5rem 0;
    padding-left: 1rem;
  }
}
h1 {
  font-size: 3rem;
  font-weight: bold;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1.1rem;
}

ul,
ol {
  padding: 0 1rem;
  margin: 1.25rem 1rem 1.25rem 0.4rem;
  list-style: disc;

  li p {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    list-style: disc;
  }
}
</style>

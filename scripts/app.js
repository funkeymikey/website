import { createApp, ref, reactive, watchEffect, onMounted, onBeforeUnmount, nextTick } from "https://cdn.jsdelivr.net/npm/vue@3.5.43/dist/vue.esm-browser.prod.js";
import { resume as resumeData } from "./resume.js";
import { formatDate } from "./date.js";

const resume = reactive(resumeData);

createApp({
  setup() {
    watchEffect(() => { document.title = resume.name; });
    const expanded = ref(new Set());
    const workGrid = ref(null);
    let observer;
    let frame;
    const isPopulated = value => Array.isArray(value) && value.length > 0;
    const shouldShow = index => expanded.value.has(index);
    const isOverflowing = () => true;
    const formatShortDate = date => date ? `${date.slice(5,7)}/${date.slice(0,4)}` : 'Present';
    const layout = () => {
      if (window.matchMedia("print").matches) return;
      const grid = workGrid.value;
      if (!grid || !grid.clientWidth) return;
      const cards = [...grid.children];
      if (!cards.length) return;
      const width = cards[0].getBoundingClientRect().width;
      const columns = Math.max(1, Math.round(grid.clientWidth / width));
      const heights = Array(columns).fill(0);
      for (const card of cards) {
        const column = heights.indexOf(Math.min(...heights));
        card.style.left = `${column * width}px`;
        card.style.top = `${heights[column]}px`;
        heights[column] += card.getBoundingClientRect().height + 30;
      }
      grid.style.height = `${Math.max(...heights)}px`;
    };
    const scheduleLayout = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(layout); };
    const toggleMore = async index => {
      if (expanded.value.has(index)) expanded.value.delete(index);
      else expanded.value.add(index);
      await nextTick();
      scheduleLayout();
    };
    onMounted(() => {
      window.addEventListener("afterprint", scheduleLayout);
      observer = new ResizeObserver(scheduleLayout);
      observer.observe(workGrid.value);
      for (const card of workGrid.value.children) observer.observe(card);
      document.fonts.ready.then(scheduleLayout);
      scheduleLayout();
    });
    onBeforeUnmount(() => { window.removeEventListener("afterprint", scheduleLayout); observer?.disconnect(); cancelAnimationFrame(frame); });
    return { resume, formatDate, formatShortDate, isPopulated, shouldShow, isOverflowing, toggleMore, workGrid };
  },
}).mount("#app");

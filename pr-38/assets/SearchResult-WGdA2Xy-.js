import { g as defineComponent, u as useRouter, h as useRouteLocale, i as useLocaleConfig, P, j as computed, k as useEventListener, w as watch, l as h, m as r, R as RouteLink, n as o, t, p as i, q as reactive, v as ref, x as h$1, y as isPlainObject, z as n, A as d, C, B as usePageData, D as onMounted, E as w, F as onUnmounted, G as isString, H as shallowRef, I as useDebounceFn, J as l, K as toRef, L as useLocalStorage } from "./app-BkkDXh4l.js";
const store = ["/", "/admins/", "/all/", "/analytics/", "/approvals/", "/architects/", "/beginners/", "/admins/folders/", "/admins/team_permissions/", "/admins/version/", "/all/ai/", "/all/approval_request/", "/all/hotkeys/", "/all/overlays/", "/all/overview/", "/all/status/", "/all/uml/", "/analytics/bp_table/", "/analytics/token_sim_attach_action/", "/approvals/approve/", "/approvals/reglaments/", "/architects/architecture_elements/", "/architects/org/", "/architects/work_with_bp_map/", "/architects/work_with_bp_tree/", "/beginners/subprocesses/", "/beginners/upload_bpmn/", "/main/about_doc/", "/main/faq/", "/main/quick_start/", "/all/reglaments/main_info/", "/analytics/reglaments/buisness_proc/", "/analytics/reglaments/roles/", "/main/about_doc/commitment/", "/main/extra_content/videos/", "/main/faq/acc/", "/main/faq/bp_table/", "/main/faq/bp_tree/", "/main/faq/custom-fields/", "/main/faq/diagram/", "/main/faq/status/", "/main/extra_content/videos/approve_process/", "/main/extra_content/videos/optimise/", "/main/extra_content/videos/process_modeling/", "/main/extra_content/videos/versioning/", "/404.html", "/main/", "/all/reglaments/", "/analytics/reglaments/", "/main/extra_content/"];
const ke = "SEARCH_PRO_QUERY_HISTORY", f = useLocalStorage(ke, []), Ce = () => {
  const { queryHistoryCount: r2 } = l, l$1 = r2 > 0;
  return { enabled: l$1, queryHistory: f, addQueryHistory: (a) => {
    f.value = Array.from(/* @__PURE__ */ new Set([a, ...f.value.slice(0, r2 - 1)]));
  }, removeQueryHistory: (a) => {
    f.value = [...f.value.slice(0, a), ...f.value.slice(a + 1)];
  } };
}, E = (r2) => store[r2.id] + ("anchor" in r2 ? `#${r2.anchor}` : ""), xe = "SEARCH_PRO_RESULT_HISTORY", { resultHistoryCount: Y } = l, g = useLocalStorage(xe, []), qe = () => {
  const r2 = Y > 0;
  return { enabled: r2, resultHistory: g, addResultHistory: (l2) => {
    {
      const a = { link: E(l2), display: l2.display };
      "header" in l2 && (a.header = l2.header), g.value = [a, ...g.value.slice(0, Y - 1)];
    }
  }, removeResultHistory: (l2) => {
    g.value = [...g.value.slice(0, l2), ...g.value.slice(l2 + 1)];
  } };
}, we = (r2) => {
  const l$1 = C(), a = useRouteLocale(), q = usePageData(), i2 = ref(0), S = computed(() => i2.value > 0), y = shallowRef([]);
  return onMounted(() => {
    const { search: d2, terminate: w$1 } = w(), H = useDebounceFn((c) => {
      const R = c.join(" "), { searchFilter: L = (h2) => h2, splitWord: O, suggestionsFilter: I, ...m } = l$1.value;
      R ? (i2.value += 1, d2(c.join(" "), a.value, m).then((h2) => L(h2, R, a.value, q.value)).then((h2) => {
        i2.value -= 1, y.value = h2;
      }).catch((h2) => {
        console.warn(h2), i2.value -= 1, i2.value || (y.value = []);
      })) : y.value = [];
    }, l.searchDelay - l.suggestDelay);
    watch([r2, a], ([c]) => H(c), { immediate: true }), onUnmounted(() => {
      w$1();
    });
  }), { isSearching: S, results: y };
};
var Le = defineComponent({ name: "SearchResult", props: { queries: { type: Array, required: true }, isFocusing: Boolean }, emits: ["close", "updateQuery"], setup(r$1, { emit: l2 }) {
  const a = useRouter(), q = useRouteLocale(), i$1 = useLocaleConfig(P), { addQueryHistory: y, queryHistory: d$1, removeQueryHistory: w2 } = Ce(), { resultHistory: c, addResultHistory: R, removeResultHistory: L } = qe(), I = toRef(r$1, "queries"), { results: m, isSearching: h$2 } = we(I), u = reactive({ isQuery: true, index: 0 }), v = ref(0), p = ref(0), T = computed(() => d$1.value.length > 0 || c.value.length > 0), P$1 = computed(() => m.value.length > 0), b = computed(() => m.value[v.value] || null), B = () => {
    const { isQuery: e, index: s } = u;
    s === 0 ? (u.isQuery = !e, u.index = e ? c.value.length - 1 : d$1.value.length - 1) : u.index = s - 1;
  }, N = () => {
    const { isQuery: e, index: s } = u;
    s === (e ? d$1.value.length - 1 : c.value.length - 1) ? (u.isQuery = !e, u.index = 0) : u.index = s + 1;
  }, K = () => {
    v.value = v.value > 0 ? v.value - 1 : m.value.length - 1, p.value = b.value.contents.length - 1;
  }, V = () => {
    v.value = v.value < m.value.length - 1 ? v.value + 1 : 0, p.value = 0;
  }, z = () => {
    p.value < b.value.contents.length - 1 ? p.value += 1 : V();
  }, G = () => {
    p.value > 0 ? p.value -= 1 : K();
  }, D = (e) => e.map((s) => isString(s) ? s : h(s[0], s[1])), J = (e) => {
    if (e.type === "customField") {
      const s = h$1[e.index] || "$content", [o2, k = ""] = isPlainObject(s) ? s[q.value].split("$content") : s.split("$content");
      return e.display.map((n2) => h("div", D([o2, ...n2, k])));
    }
    return e.display.map((s) => h("div", D(s)));
  }, Q = () => {
    v.value = 0, p.value = 0, l2("updateQuery", ""), l2("close");
  }, X = () => h("ul", { class: "search-pro-result-list" }, h("li", { class: "search-pro-result-list-item" }, [h("div", { class: "search-pro-result-title" }, i$1.value.queryHistory), d$1.value.map((e, s) => h("div", { class: ["search-pro-result-item", { active: u.isQuery && u.index === s }], onClick: () => {
    l2("updateQuery", e);
  } }, [h(n, { class: "search-pro-result-type" }), h("div", { class: "search-pro-result-content" }, e), h("button", { class: "search-pro-remove-icon", innerHTML: d, onClick: (o2) => {
    o2.preventDefault(), o2.stopPropagation(), w2(s);
  } })]))])), Z = () => h("ul", { class: "search-pro-result-list" }, h("li", { class: "search-pro-result-list-item" }, [h("div", { class: "search-pro-result-title" }, i$1.value.resultHistory), c.value.map((e, s) => h(RouteLink, { to: e.link, class: ["search-pro-result-item", { active: !u.isQuery && u.index === s }], onClick: () => {
    Q();
  } }, () => [h(n, { class: "search-pro-result-type" }), h("div", { class: "search-pro-result-content" }, [e.header ? h("div", { class: "content-header" }, e.header) : null, h("div", e.display.map((o2) => D(o2)).flat())]), h("button", { class: "search-pro-remove-icon", innerHTML: d, onClick: (o2) => {
    o2.preventDefault(), o2.stopPropagation(), L(s);
  } })]))]));
  return useEventListener("keydown", (e) => {
    if (r$1.isFocusing) {
      if (P$1.value) {
        if (e.key === "ArrowUp")
          G();
        else if (e.key === "ArrowDown")
          z();
        else if (e.key === "Enter") {
          const s = b.value.contents[p.value];
          y(r$1.queries.join(" ")), R(s), a.push(E(s)), Q();
        }
      } else {
        if (e.key === "ArrowUp")
          B();
        else if (e.key === "ArrowDown")
          N();
        else if (e.key === "Enter") {
          const { index: s } = u;
          u.isQuery ? (l2("updateQuery", d$1.value[s]), e.preventDefault()) : (a.push(c.value[s].link), Q());
        }
      }
    }
  }), watch([v, p], () => {
    var _a;
    (_a = document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")) == null ? void 0 : _a.scrollIntoView(false);
  }, { flush: "post" }), () => h("div", { class: ["search-pro-result-wrapper", { empty: r$1.queries.length ? !P$1.value : !T.value }], id: "search-pro-results" }, r$1.queries.length ? h$2.value ? h(r, { hint: i$1.value.searching }) : P$1.value ? h("ul", { class: "search-pro-result-list" }, m.value.map(({ title: e, contents: s }, o$1) => {
    const k = v.value === o$1;
    return h("li", { class: ["search-pro-result-list-item", { active: k }] }, [h("div", { class: "search-pro-result-title" }, e || i$1.value.defaultTitle), s.map((n2, ee) => {
      const F = k && p.value === ee;
      return h(RouteLink, { to: E(n2), class: ["search-pro-result-item", { active: F, "aria-selected": F }], onClick: () => {
        y(r$1.queries.join(" ")), R(n2), Q();
      } }, () => [n2.type === "text" ? null : h(n2.type === "title" ? o : n2.type === "heading" ? t : i, { class: "search-pro-result-type" }), h("div", { class: "search-pro-result-content" }, [n2.type === "text" && n2.header ? h("div", { class: "content-header" }, n2.header) : null, h("div", J(n2))])]);
    })]);
  })) : i$1.value.emptyResult : T.value ? [X(), Z()] : i$1.value.emptyHistory);
} });
export {
  Le as default
};
//# sourceMappingURL=SearchResult-WGdA2Xy-.js.map

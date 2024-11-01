import { computed, mergeProps, useSSRContext, unref, withCtx, createVNode, useModel, ref, onMounted, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, resolveComponent, withDirectives, vModelText, Fragment, renderList, vModelSelect, onUnmounted, renderSlot, watch, withKeys, nextTick, reactive, vShow, Transition, vModelCheckbox, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderTeleport, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Link, useForm, Head, usePage, router, createInertiaApp } from "@inertiajs/vue3";
import { initFlowbite } from "flowbite";
import { Plus } from "@element-plus/icons-vue";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { PlusIcon, MinusIcon, ChevronDownIcon, Squares2X2Icon, FunnelIcon } from "@heroicons/vue/20/solid";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$H = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$G = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 316 316",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$F = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "h-20 w-20 fill-current text-gray-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "h-20 w-20 fill-current text-gray-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block text-sm font-medium text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$B = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const model = useModel(__props, "modelValue");
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: "rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
        ref_key: "input",
        ref: input
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("admin.login.post"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$F, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$H, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$D, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$D, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$H, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(PrimaryButton, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Auth/Login.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50" }, _attrs))}><div class="flex flex-wrap justify-between items-center"><div class="flex justify-start items-center"><button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"><svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg aria-hidden="true" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Toggle sidebar</span></button>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.dashboard"),
        class: "flex items-center justify-between mr-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"${_scopeId}></path></svg><span class="self-center text-2xl font-semibold whitespace-nowrap"${_scopeId}>V.shop</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-6 h-6"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                })
              ])),
              createVNode("span", { class: "self-center text-2xl font-semibold whitespace-nowrap" }, "V.shop")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<form action="#" method="GET" class="hidden md:block md:pl-2"><label for="topbar-search" class="sr-only">Search</label><div class="relative md:w-64 md:w-96"><div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg></div><input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5" placeholder="Search"></div></form></div><div class="flex items-center lg:order-2"><button type="button" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" class="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"><span class="sr-only">Toggle search</span><svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg></button><button type="button" data-dropdown-toggle="notification-dropdown" class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"><span class="sr-only">View notifications</span><svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg></button><div class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg rounded-xl" id="notification-dropdown"><div class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50"> Notifications </div><div><a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100"><div class="flex-shrink-0"><img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar"><div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700"><svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg></div></div><div class="pl-3 w-full"><div class="text-gray-500 font-normal text-sm mb-1.5"> New message from <span class="font-semibold text-gray-900">Bonnie Green</span>: &quot;Hey, what&#39;s up? All set for the presentation?&quot; </div><div class="text-xs font-medium text-primary-600"> a few moments ago </div></div></a><a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100"><div class="flex-shrink-0"><img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar"><div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white"><svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg></div></div><div class="pl-3 w-full"><div class="text-gray-500 font-normal text-sm mb-1.5"><span class="font-semibold text-gray-900">Jese leos</span> and <span class="font-medium text-gray-900">5 others</span> started following you. </div><div class="text-xs font-medium text-primary-600"> 10 minutes ago </div></div></a><a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100"><div class="flex-shrink-0"><img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph McFall avatar"><div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white"><svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg></div></div><div class="pl-3 w-full"><div class="text-gray-500 font-normal text-sm mb-1.5"><span class="font-semibold text-gray-900">Joseph Mcfall</span> and <span class="font-medium text-gray-900">141 others</span> love your story. See it and view more stories. </div><div class="text-xs font-medium text-primary-600"> 44 minutes ago </div></div></a><a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100"><div class="flex-shrink-0"><img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas image"><div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white"><svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg></div></div><div class="pl-3 w-full"><div class="text-gray-500 font-normal text-sm mb-1.5"><span class="font-semibold text-gray-900">Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-primary-600">@bonnie.green</span> what do you say? </div><div class="text-xs font-medium text-primary-600"> 1 hour ago </div></div></a><a href="#" class="flex py-3 px-4 hover:bg-gray-100"><div class="flex-shrink-0"><img class="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="Robert image"><div class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white"><svg aria-hidden="true" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg></div></div><div class="pl-3 w-full"><div class="text-gray-500 font-normal text-sm mb-1.5"><span class="font-semibold text-gray-900">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend. </div><div class="text-xs font-medium text-primary-600"> 3 hours ago </div></div></a></div><a href="#" class="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100"><div class="inline-flex items-center"><svg aria-hidden="true" class="mr-2 w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg> View all </div></a></div><button type="button" data-dropdown-toggle="apps-dropdown" class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"><span class="sr-only">View notifications</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button><div class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg rounded-xl" id="apps-dropdown"><div class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50"> Apps </div><div class="grid grid-cols-3 gap-4 p-4"><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg><div class="text-sm text-gray-900">Sales</div></a><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg><div class="text-sm text-gray-900">Users</div></a><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg><div class="text-sm text-gray-900">Inbox</div></a><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg><div class="text-sm text-gray-900"> Profile </div></a><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg><div class="text-sm text-gray-900"> Settings </div></a><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><div class="text-sm text-gray-900"> Products </div></a><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg><div class="text-sm text-gray-900"> Pricing </div></a><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd"></path></svg><div class="text-sm text-gray-900"> Billing </div></a><a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 group"><svg aria-hidden="true" class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg><div class="text-sm text-gray-900"> Logout </div></a></div></div><button type="button" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown"><span class="sr-only">Open user menu</span><img class="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png" alt="user photo"></button><div class="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow rounded-xl" id="dropdown"><div class="py-3 px-4"><span class="block text-sm font-semibold text-gray-900">Neil Sims</span><span class="block text-sm text-gray-900 truncate">name@flowbite.com</span></div><ul class="py-1 text-gray-700" aria-labelledby="dropdown"><li><a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">My profile</a></li><li><a href="#" class="block py-2 px-4 text-sm hover:bg-gray-100">Account settings</a></li></ul><ul class="py-1 text-gray-700" aria-labelledby="dropdown"><li><a href="#" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100"><svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> My likes</a></li><li><a href="#" class="flex items-center py-2 px-4 text-sm hover:bg-gray-100"><svg class="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg> Collections</a></li><li><a href="#" class="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100"><span class="flex items-center"><svg aria-hidden="true" class="mr-2 w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg> Pro version </span><svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a></li></ul><ul class="py-1 text-gray-700" aria-labelledby="dropdown"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "block cursor-pointer py-2 px-4 text-sm hover:bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign out`);
          } else {
            return [
              createTextVNode(" Sign out")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Components/Navbar.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0",
        "aria-label": "Sidenav",
        id: "drawer-navigation"
      }, _attrs))}><div class="overflow-y-auto py-5 px-3 h-full bg-white"><form action="#" method="GET" class="md:hidden mb-2"><label for="sidebar-search" class="sr-only">Search</label><div class="relative"><div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"><svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg></div><input type="text" name="search" id="sidebar-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" placeholder="Search"></div></form><ul class="space-y-2"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.dashboard"),
        class: "flex items-center p-2 text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"${_scopeId}></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"${_scopeId}></path></svg><span class="ml-3"${_scopeId}>Dashbaord</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                "aria-hidden": "true",
                class: "w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" }),
                createVNode("path", { d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" })
              ])),
              createVNode("span", { class: "ml-3" }, "Dashbaord")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><button type="button" class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages"><svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg><span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span><svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><ul id="dropdown-pages" class="hidden py-2 space-y-2"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.products.index"),
        class: "flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Product`);
          } else {
            return [
              createTextVNode("Product")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#" class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Brand</a></li><li><a href="#" class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">Category</a></li></ul></li></ul><ul class="pt-5 mt-5 space-y-2 border-t border-gray-200"><li><a href="#" class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group"><svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg><span class="ml-3">Sale Report</span></a></li></ul></div><div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white z-20"><a href="#" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"><svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg></a><a href="#" data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"><svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg></a><div id="tooltip-settings" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"> Settings page <div class="tooltip-arrow" data-popper-arrow></div></div><button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"><svg aria-hidden="true" class="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlink:href="#a" y="420"></use><use xlink:href="#a" y="840"></use><use xlink:href="#a" y="1260"></use></g><use xlink:href="#a" y="1680"></use></g><use xlink:href="#b" x="247" y="210"></use></g><use xlink:href="#c" x="494"></use></g><use xlink:href="#d" x="988"></use><use xlink:href="#c" x="1976"></use><use xlink:href="#e" x="2470"></use></g></svg></button><div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow" id="language-dropdown"><ul class="py-1" role="none"><li><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><div class="inline-flex items-center"><svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path></g></svg> English (US) </div></a></li><li><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><div class="inline-flex items-center"><svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z"></path><path d="M0 0h512v170.7H0z"></path><path fill="#d00" d="M0 170.7h512v170.6H0z"></path></svg> Deutsch </div></a></li><li><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><div class="inline-flex items-center"><svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h512v512H0z"></path><path fill="#009246" d="M0 0h170.7v512H0z"></path><path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path></g></svg> Italiano </div></a></li><li><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"><div class="inline-flex items-center"><svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512"><defs><path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path></defs><path fill="#de2910" d="M0 0h512v512H0z"></path><use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"></use><use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"></use><use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"></use></svg> 中文 (繁體) </div></a></li></ul></div></div></aside>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Components/Sidebar.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  __name: "AdminLayout",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      initFlowbite();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$z, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$y, null, null, _parent));
      _push(`<main class="p-4 md:ml-64 h-auto pt-20">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Components/AdminLayout.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      initFlowbite();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$x, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"${_scopeId}><div class="border-2 border-dashed border-gray-300 rounded-lg h-32 md:h-64"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64"${_scopeId}></div></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-96 mb-4"${_scopeId}></div><div class="grid grid-cols-2 gap-4 mb-4"${_scopeId}><div class="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"${_scopeId}></div></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-96 mb-4"${_scopeId}></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div class="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"${_scopeId}></div><div class="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4" }, [
                  createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg h-32 md:h-64" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64" })
                ]),
                createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-96 mb-4" }),
                createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }, [
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" })
                ]),
                createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-96 mb-4" }),
                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" }),
                  createVNode("div", { class: "border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  __name: "ProductList",
  __ssrInlineRender: true,
  props: {
    products: Array
  },
  setup(__props) {
    const brands = usePage().props.brands;
    const categories = usePage().props.categories;
    ref(false);
    const editMode = ref(false);
    const dialogVisible = ref(false);
    const productImages = ref([]);
    const dialogImageUrl = ref("");
    const handleFileChange = (file) => {
      console.log(file);
      productImages.value.push(file);
    };
    const handlePictureCardPreview = (file) => {
      dialogImageUrl.value = file.url;
      dialogVisible.value = true;
    };
    const handleRemove = (file) => {
      console.log(file);
    };
    const id = ref("");
    const title = ref("");
    const price = ref("");
    const quantity = ref("");
    const description = ref("");
    const product_images = ref([]);
    ref("");
    const category_id = ref("");
    const brand_id = ref("");
    ref("");
    const AddProduct = async () => {
      const formData = new FormData();
      formData.append("title", title.value);
      formData.append("price", price.value);
      formData.append("quantity", quantity.value);
      formData.append("description", description.value);
      formData.append("brand_id", brand_id.value);
      formData.append("category_id", category_id.value);
      for (const image of productImages.value) {
        formData.append("product_images[]", image.raw);
      }
      try {
        await router.post("products/store", formData, {
          onSuccess: (page) => {
            Swal.fire({
              toast: true,
              icon: "success",
              position: "top-end",
              showConfirmButton: false,
              title: page.props.flash.success
            });
            dialogVisible.value = false;
            resetFormData();
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const resetFormData = () => {
      id.value = "";
      title.value = "";
      price.value = "";
      quantity.value = "";
      description.value = "";
      productImages.value = [];
      dialogImageUrl.value = "";
    };
    const deleteImage = async (pimage, index) => {
      try {
        await router.delete("/admin/products/image/" + pimage.id, {
          onSuccess: (page) => {
            product_images.value.splice(index, 1);
            Swal.fire({
              toast: true,
              icon: "success",
              position: "top-end",
              showConfirmButton: false,
              title: page.props.flash.success
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    const updateProduct = async () => {
      const formData = new FormData();
      formData.append("title", title.value);
      formData.append("price", price.value);
      formData.append("quantity", quantity.value);
      formData.append("description", description.value);
      formData.append("category_id", category_id.value);
      formData.append("brand_id", brand_id.value);
      formData.append("_method", "PUT");
      for (const image of productImages.value) {
        formData.append("product_images[]", image.raw);
      }
      try {
        await router.post("products/update/" + id.value, formData, {
          onSuccess: (page) => {
            dialogVisible.value = false;
            resetFormData();
            Swal.fire({
              toast: true,
              icon: "success",
              position: "top-end",
              showConfirmButton: false,
              title: page.props.flash.success
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "p-3 sm:p-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
        title: editMode.value ? "Edit product" : "Add Product",
        width: "30%",
        "before-close": _ctx.handleClose
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div class="relative z-0 w-full mb-6 group"${_scopeId}><input${ssrRenderAttr("value", title.value)} type="text" name="floating_title" id="floating_title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required${_scopeId}><label for="floating_title" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"${_scopeId}>Title</label></div><div class="relative z-0 w-full mb-6 group"${_scopeId}><input type="text" name="floating_price" id="floating_price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required${ssrRenderAttr("value", price.value)}${_scopeId}><label for="floating_price" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"${_scopeId}>Price</label></div><div class="relative z-0 w-full mb-6 group"${_scopeId}><input type="number" name="qty" id="floating_qty" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required${ssrRenderAttr("value", quantity.value)}${_scopeId}><label for="floating_qty" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"${_scopeId}>Quantity</label></div><div${_scopeId}><label for="countries" class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}>Select Category</label><select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"${_scopeId}><!--[-->`);
            ssrRenderList(unref(categories), (category) => {
              _push2(`<option${ssrRenderAttr("value", category.id)}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div${_scopeId}><label for="countries" class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}>Select Brand</label><select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"${_scopeId}><!--[-->`);
            ssrRenderList(unref(brands), (brand) => {
              _push2(`<option${ssrRenderAttr("value", brand.id)}${_scopeId}>${ssrInterpolate(brand.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="grid md:gap-6"${_scopeId}><div class="relative z-0 w-full mb-6 group"${_scopeId}><label for="message" class="block mb-2 text-sm font-medium text-gray-900"${_scopeId}>Description</label><textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."${_scopeId}>${ssrInterpolate(description.value)}</textarea></div></div><div class="grid md:gap-6"${_scopeId}><div class="relative z-0 w-full mb-6 group"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_upload, {
              "file-list": productImages.value,
              "onUpdate:fileList": ($event) => productImages.value = $event,
              "list-type": "picture-card",
              multiple: "",
              "on-preview": handlePictureCardPreview,
              "on-remove": handleRemove,
              "on-change": handleFileChange
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Plus), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Plus))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(Plus))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-nowrap mb-8"${_scopeId}><!--[-->`);
            ssrRenderList(product_images.value, (pimage, index) => {
              _push2(`<div class="relative w-32 h-32"${_scopeId}><img class="w-24 h-20 rounded"${ssrRenderAttr("src", `/${pimage.image}`)} alt=""${_scopeId}><span class="absolute top-0 right-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white rounded-full"${_scopeId}><span class="text-white text-xs font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"${_scopeId}>x</span></span></div>`);
            });
            _push2(`<!--]--></div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"${_scopeId}>Submit</button></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(($event) => editMode.value ? updateProduct() : AddProduct(), ["prevent"])
              }, [
                createVNode("div", { class: "relative z-0 w-full mb-6 group" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => title.value = $event,
                    type: "text",
                    name: "floating_title",
                    id: "floating_title",
                    class: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    placeholder: " ",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, title.value]
                  ]),
                  createVNode("label", {
                    for: "floating_title",
                    class: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }, "Title")
                ]),
                createVNode("div", { class: "relative z-0 w-full mb-6 group" }, [
                  withDirectives(createVNode("input", {
                    type: "text",
                    name: "floating_price",
                    id: "floating_price",
                    class: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    placeholder: " ",
                    required: "",
                    "onUpdate:modelValue": ($event) => price.value = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, price.value]
                  ]),
                  createVNode("label", {
                    for: "floating_price",
                    class: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }, "Price")
                ]),
                createVNode("div", { class: "relative z-0 w-full mb-6 group" }, [
                  withDirectives(createVNode("input", {
                    type: "number",
                    name: "qty",
                    id: "floating_qty",
                    class: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    placeholder: " ",
                    required: "",
                    "onUpdate:modelValue": ($event) => quantity.value = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, quantity.value]
                  ]),
                  createVNode("label", {
                    for: "floating_qty",
                    class: "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }, "Quantity")
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "countries",
                    class: "block mb-2 text-sm font-medium text-gray-900"
                  }, "Select Category"),
                  withDirectives(createVNode("select", {
                    id: "countries",
                    "onUpdate:modelValue": ($event) => category_id.value = $event,
                    class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                      return openBlock(), createBlock("option", {
                        key: category.id,
                        value: category.id
                      }, toDisplayString(category.name), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, category_id.value]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "countries",
                    class: "block mb-2 text-sm font-medium text-gray-900"
                  }, "Select Brand"),
                  withDirectives(createVNode("select", {
                    id: "countries",
                    "onUpdate:modelValue": ($event) => brand_id.value = $event,
                    class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(brands), (brand) => {
                      return openBlock(), createBlock("option", {
                        key: brand.id,
                        value: brand.id
                      }, toDisplayString(brand.name), 9, ["value"]);
                    }), 128))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, brand_id.value]
                  ])
                ]),
                createVNode("div", { class: "grid md:gap-6" }, [
                  createVNode("div", { class: "relative z-0 w-full mb-6 group" }, [
                    createVNode("label", {
                      for: "message",
                      class: "block mb-2 text-sm font-medium text-gray-900"
                    }, "Description"),
                    withDirectives(createVNode("textarea", {
                      id: "message",
                      rows: "4",
                      "onUpdate:modelValue": ($event) => description.value = $event,
                      class: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
                      placeholder: "Leave a comment..."
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, description.value]
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid md:gap-6" }, [
                  createVNode("div", { class: "relative z-0 w-full mb-6 group" }, [
                    createVNode(_component_el_upload, {
                      "file-list": productImages.value,
                      "onUpdate:fileList": ($event) => productImages.value = $event,
                      "list-type": "picture-card",
                      multiple: "",
                      "on-preview": handlePictureCardPreview,
                      "on-remove": handleRemove,
                      "on-change": handleFileChange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(unref(Plus))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["file-list", "onUpdate:fileList"])
                  ])
                ]),
                createVNode("div", { class: "flex flex-nowrap mb-8" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(product_images.value, (pimage, index) => {
                    return openBlock(), createBlock("div", {
                      key: pimage.id,
                      class: "relative w-32 h-32"
                    }, [
                      createVNode("img", {
                        class: "w-24 h-20 rounded",
                        src: `/${pimage.image}`,
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("span", { class: "absolute top-0 right-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white rounded-full" }, [
                        createVNode("span", {
                          onClick: ($event) => deleteImage(pimage, index),
                          class: "text-white text-xs font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        }, "x", 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ]),
                createVNode("button", {
                  type: "submit",
                  class: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                }, "Submit")
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mx-auto max-w-screen-xl px-4 lg:px-12"><div class="bg-white relative shadow-md sm:rounded-lg overflow-hidden"><div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"><div class="w-full md:w-1/2"><form class="flex items-center"><label for="simple-search" class="sr-only">Search</label><div class="relative w-full"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" placeholder="Search" required=""></div></form></div><div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"><button type="button" class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"><svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path></svg> Add product </button><div class="flex items-center space-x-3 w-full md:w-auto"><button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200" type="button"><svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg> Actions </button><div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"><ul class="py-1 text-sm text-gray-700" aria-labelledby="actionsDropdownButton"><li><a href="#" class="block py-2 px-4 hover:bg-gray-100">Mass Edit</a></li></ul><div class="py-1"><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Delete all</a></div></div><button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200" type="button"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"></path></svg> Filter <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg></button><div id="filterDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow"><h6 class="mb-3 text-sm font-medium text-gray-900">Choose brand</h6><ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton"><li class="flex items-center"><input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"><label for="apple" class="ml-2 text-sm font-medium text-gray-900">Apple (56)</label></li><li class="flex items-center"><input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"><label for="fitbit" class="ml-2 text-sm font-medium text-gray-900">Microsoft (16)</label></li><li class="flex items-center"><input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"><label for="razor" class="ml-2 text-sm font-medium text-gray-900">Razor (49)</label></li><li class="flex items-center"><input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"><label for="nikon" class="ml-2 text-sm font-medium text-gray-900">Nikon (12)</label></li><li class="flex items-center"><input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"><label for="benq" class="ml-2 text-sm font-medium text-gray-900">BenQ (74)</label></li></ul></div></div></div></div><div class="overflow-x-auto"><table class="w-full text-sm text-left text-gray-500"><thead class="text-xs text-gray-700 uppercase bg-gray-50"><tr><th scope="col" class="px-4 py-3">Product name</th><th scope="col" class="px-4 py-3">Category</th><th scope="col" class="px-4 py-3">Brand</th><th scope="col" class="px-4 py-3">Quantity</th><th scope="col" class="px-4 py-3">Price</th><th scope="col" class="px-4 py-3">Stock</th><th scope="col" class="px-4 py-3">Publish</th><th scope="col" class="px-4 py-3"><span class="sr-only">Actions</span></th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.products, (product, index) => {
        _push(`<tr class="border-b"><th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">${ssrInterpolate(product.title)}</th><td class="px-4 py-3">${ssrInterpolate(product.category.name)}</td><td class="px-4 py-3">${ssrInterpolate(product.brand.name)}</td><td class="px-4 py-3">${ssrInterpolate(product.quantity)}</td><td class="px-4 py-3">$${ssrInterpolate(product.price)}</td><td class="px-4 py-3">`);
        if (product.inStock == 0) {
          _push(`<span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">inStock</span>`);
        } else {
          _push(`<span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Out of Stock</span>`);
        }
        _push(`</td><td class="px-4 py-3">`);
        if (product.published == 0) {
          _push(`<button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">Published</button>`);
        } else {
          _push(`<button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">UnPublished</button>`);
        }
        _push(`</td><td class="px-4 py-3 flex items-center justify-end"><button${ssrRenderAttr("id", `${product.id}-button`)}${ssrRenderAttr("data-dropdown-toggle", `${product.id}`)} class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none" type="button"><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg></button><div${ssrRenderAttr("id", `${product.id}`)} class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"><ul class="py-1 text-sm text-gray-700"${ssrRenderAttr("aria-labelledby", `${product.id}-button`)}><li><a href="#" class="block py-2 px-4 hover:bg-gray-100">Edit</a></li></ul><div class="py-1"><a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Delete</a></div></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation"><span class="text-sm font-normal text-gray-500"> Showing <span class="font-semibold text-gray-900">1-10</span> of <span class="font-semibold text-gray-900">1000</span></span><ul class="inline-flex items-stretch -space-x-px"><li><a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"><span class="sr-only">Previous</span><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a></li><li><a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a></li><li><a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a></li><li><a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700">3</a></li><li><a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</a></li><li><a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">100</a></li><li><a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"><span class="sr-only">Next</span><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a></li></ul></nav></div></div></section>`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Product/ProductList.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    products: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$x, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$v, { products: __props.products }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$v, { products: __props.products }, null, 8, ["products"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Product/Index.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$F, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$D, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex justify-end" }, [
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$F, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$D, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$F, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 block"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$H, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$D, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$D, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 block" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$H, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$F, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$D, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$D, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$D, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$D, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$F, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$D, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$D, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$D, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(
      () => props.status === "verification-link-sent"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$F, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Log Out`);
                } else {
                  return [
                    createTextVNode("Log Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Log Out")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e2) => {
      if (open.value && e2.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "ltr:origin-top-left rtl:origin-top-right start-0";
      } else if (props.align === "right") {
        return "ltr:origin-top-right rtl:origin-top-left end-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100"><nav class="border-b border-gray-100 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 justify-between"><div class="flex"><div class="flex shrink-0 items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:ms-6 sm:flex sm:items-center"><div class="relative ms-3">`);
      _push(ssrRenderComponent(_sfc_main$n, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="-me-0.5 ms-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "-me-0.5 ms-2 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$m, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$m, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$m, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$m, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{
        block: showingNavigationDropdown.value,
        hidden: !showingNavigationDropdown.value
      }, "sm:hidden"])}"><div class="space-y-1 pb-3 pt-2">`);
      _push(ssrRenderComponent(_sfc_main$k, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-t border-gray-200 pb-1 pt-4"><div class="px-4"><div class="text-base font-medium text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="text-sm font-medium text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$k, {
        href: _ctx.route("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$k, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$j, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}> You&#39;re logged in! </div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, " You're logged in! ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const DangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$g = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e2) => {
      if (e2.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.clearErrors();
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900"> Delete Account </h2><p class="mt-1 text-sm text-gray-600"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
      _push(ssrRenderComponent(DangerButton, { onClick: confirmUserDeletion }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete Account`);
          } else {
            return [
              createTextVNode("Delete Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$g, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              for: "password",
              value: "Password",
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$E, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$f, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(DangerButton, {
              class: ["ms-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: deleteUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
                createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$D, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    onKeyup: withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$E, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$f, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Update Password </h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$D, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$B, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$D, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$B, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$D, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$B, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900"> Profile Information </h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$D, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$B, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$D, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$B, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$E, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="mt-2 text-sm text-gray-800"> Your email address is unverified. `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 text-sm font-medium text-green-600"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600"> Saved. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$j, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}> Profile </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, " Profile ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"${_scopeId}><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$c, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$d, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$e, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$c, {
                      "must-verify-email": __props.mustVerifyEmail,
                      status: __props.status,
                      class: "max-w-xl"
                    }, null, 8, ["must-verify-email", "status"])
                  ]),
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$d, { class: "max-w-xl" })
                  ]),
                  createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    createVNode(_sfc_main$e, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const canLogin = usePage().props.canLogin;
    const canRegister = usePage().props.canRegister;
    const auth = usePage().props.auth;
    computed(() => usePage().props.cart);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white border-gray-200" }, _attrs))}><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"${_scopeId}></path></svg><span class="self-center text-2xl font-semibold whitespace-nowrap"${_scopeId}>V.shop</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-6 h-6"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                })
              ])),
              createVNode("span", { class: "self-center text-2xl font-semibold whitespace-nowrap" }, "V.shop")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(canLogin)) {
        _push(`<div class="flex items-center md:order-2"><div class="mr-4">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("cart.view"),
          class: "relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"${_scopeId}></path></svg><span class="sr-only"${_scopeId}>cart</span><div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2"${_scopeId}></div>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  })
                ])),
                createVNode("span", { class: "sr-only" }, "cart"),
                createVNode("div", { class: "absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (unref(auth).user) {
          _push(`<button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom"><span class="sr-only">Open user menu</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-8 h-8 rounded-full bg-white" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg></button>`);
        } else {
          _push(`<div>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            type: "button",
            class: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Login`);
              } else {
                return [
                  createTextVNode(" Login")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (unref(canRegister)) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              type: "button",
              class: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register`);
                } else {
                  return [
                    createTextVNode(" Register")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        if (unref(auth).user) {
          _push(`<div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown"><div class="px-4 py-3"><span class="block text-sm text-gray-900">${ssrInterpolate(unref(auth).user.name)}</span><span class="block text-sm text-gray-500 truncate">${ssrInterpolate(unref(auth).user.email)}</span></div><ul class="py-2" aria-labelledby="user-menu-button"><li>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard`);
              } else {
                return [
                  createTextVNode(" Dashboard")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li><li>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("logout"),
            method: "post",
            class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Sign out`);
              } else {
                return [
                  createTextVNode(" Sign out")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user"><ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900"><li><a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a></li><li><a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">About</a></li><li><a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">Services</a></li><li><a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">Pricing</a></li><li><a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">Contact</a></li></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Layouts/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6" }, _attrs))}><span class="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved. </span><ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0"><li><a href="#" class="mr-4 hover:underline md:mr-6">About</a></li><li><a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a></li><li><a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a></li><li><a href="#" class="hover:underline">Contact</a></li></ul></footer>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Layouts/Footer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Footer
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"><a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200" role="alert"><span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Flowbite is out! See what&#39;s new</span><svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"> Testando Laravel + Swoole + Inertia + Vue</h1><p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p><div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"><a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"> Learn more <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a><a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"><svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> Watch video </a></div><div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36"><span class="font-semibold text-gray-400 uppercase">FEATURED IN</span><div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between"><a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800"><svg class="h-8" viewBox="0 0 132 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z" fill="currentColor"></path><path d="M16.4609 8.77612V20.6816L26.7966 14.7289L16.4609 8.77612Z" fill="white"></path><path d="M64.272 25.0647C63.487 24.5413 62.931 23.7237 62.6039 22.5789C62.2768 21.4669 62.1133 19.9623 62.1133 18.1307V15.6122C62.1133 13.7479 62.3095 12.2434 62.6693 11.0986C63.0618 9.95386 63.6505 9.13618 64.4355 8.61286C65.2532 8.08954 66.2998 7.82788 67.6081 7.82788C68.8837 7.82788 69.9304 8.08954 70.7153 8.61286C71.5003 9.13618 72.0564 9.98657 72.4161 11.0986C72.7759 12.2107 72.9722 13.7152 72.9722 15.6122V18.1307C72.9722 19.995 72.8086 21.4669 72.4488 22.6116C72.0891 23.7237 71.533 24.5741 70.7481 25.0974C69.9631 25.6207 68.8837 25.8824 67.5427 25.8824C66.169 25.8496 65.057 25.588 64.272 25.0647ZM68.6875 22.3172C68.9164 21.7612 69.0146 20.8127 69.0146 19.5371V14.1077C69.0146 12.8648 68.9164 11.949 68.6875 11.3603C68.4585 10.7715 68.0988 10.5099 67.5427 10.5099C67.0194 10.5099 66.6269 10.8043 66.4307 11.3603C66.2017 11.949 66.1036 12.8648 66.1036 14.1077V19.5371C66.1036 20.8127 66.2017 21.7612 66.4307 22.3172C66.6269 22.8733 67.0194 23.1676 67.5754 23.1676C68.0987 23.1676 68.4585 22.906 68.6875 22.3172Z" fill="currentColor"></path><path d="M124.649 18.1634V19.0465C124.649 20.1586 124.682 21.009 124.748 21.565C124.813 22.121 124.944 22.5462 125.173 22.7752C125.369 23.0368 125.696 23.1677 126.154 23.1677C126.743 23.1677 127.135 22.9387 127.364 22.4808C127.593 22.0229 127.691 21.2706 127.724 20.1913L131.093 20.3875C131.125 20.5511 131.125 20.7473 131.125 21.009C131.125 22.6117 130.7 23.8218 129.817 24.6068C128.934 25.3918 127.691 25.7843 126.089 25.7843C124.159 25.7843 122.818 25.1628 122.033 23.9527C121.248 22.7425 120.855 20.8782 120.855 18.327V15.2852C120.855 12.6686 121.248 10.7715 122.066 9.56136C122.883 8.35119 124.257 7.76245 126.187 7.76245C127.528 7.76245 128.574 8.02411 129.294 8.51472C130.013 9.00534 130.504 9.79032 130.798 10.8042C131.093 11.8509 131.223 13.29 131.223 15.1216V18.098H124.649V18.1634ZM125.14 10.837C124.944 11.0986 124.813 11.4911 124.748 12.0471C124.682 12.6032 124.649 13.4536 124.649 14.5983V15.8412H127.528V14.5983C127.528 13.4863 127.495 12.6359 127.43 12.0471C127.364 11.4584 127.201 11.0659 127.004 10.837C126.808 10.608 126.481 10.4772 126.089 10.4772C125.631 10.4445 125.336 10.5753 125.14 10.837Z" fill="currentColor"></path><path d="M54.7216 17.8362L50.2734 1.71143H54.1656L55.7356 9.0052C56.1281 10.8041 56.4224 12.3414 56.6187 13.617H56.7168C56.8476 12.7011 57.142 11.1966 57.5999 9.0379L59.2353 1.71143H63.1274L58.6138 17.8362V25.5552H54.7543V17.8362H54.7216Z" fill="currentColor"></path><path d="M85.6299 8.15479V25.5878H82.5554L82.2283 23.4619H82.1302C81.3125 25.0645 80.0369 25.8822 78.3688 25.8822C77.2241 25.8822 76.3737 25.4897 75.8177 24.7375C75.2617 23.9852 75 22.8077 75 21.1723V8.15479H78.9249V20.9434C78.9249 21.7284 79.023 22.2844 79.1865 22.6115C79.3501 22.9385 79.6444 23.1021 80.0369 23.1021C80.364 23.1021 80.6911 23.004 81.0181 22.775C81.3452 22.5788 81.5742 22.3171 81.705 21.99V8.15479H85.6299Z" fill="currentColor"></path><path d="M105.747 8.15479V25.5878H102.673L102.346 23.4619H102.247C101.43 25.0645 100.154 25.8822 98.4861 25.8822C97.3413 25.8822 96.4909 25.4897 95.9349 24.7375C95.3788 23.9852 95.1172 22.8077 95.1172 21.1723V8.15479H99.0421V20.9434C99.0421 21.7284 99.1402 22.2844 99.3038 22.6115C99.4673 22.9385 99.7617 23.1021 100.154 23.1021C100.481 23.1021 100.808 23.004 101.135 22.775C101.462 22.5788 101.691 22.3171 101.822 21.99V8.15479H105.747Z" fill="currentColor"></path><path d="M96.2907 4.88405H92.3986V25.5552H88.5718V4.88405H84.6797V1.71143H96.2907V4.88405Z" fill="currentColor"></path><path d="M118.731 10.935C118.502 9.82293 118.11 9.03795 117.587 8.54734C117.063 8.05672 116.311 7.79506 115.395 7.79506C114.676 7.79506 113.989 7.99131 113.367 8.41651C112.746 8.809 112.255 9.36502 111.928 10.0192H111.896V0.828369H108.102V25.5552H111.34L111.732 23.9199H111.83C112.125 24.5086 112.582 24.9665 113.204 25.3263C113.825 25.6533 114.479 25.8496 115.232 25.8496C116.573 25.8496 117.521 25.2281 118.143 24.018C118.764 22.8078 119.091 20.8781 119.091 18.2942V15.5467C119.059 13.5516 118.96 12.0143 118.731 10.935ZM115.134 18.0325C115.134 19.3081 115.068 20.2893 114.97 21.0089C114.872 21.7285 114.676 22.2518 114.447 22.5461C114.185 22.8405 113.858 23.004 113.466 23.004C113.138 23.004 112.844 22.9386 112.582 22.7751C112.321 22.6116 112.092 22.3826 111.928 22.0882V12.2106C112.059 11.7527 112.288 11.3602 112.615 11.0331C112.942 10.7387 113.302 10.5752 113.662 10.5752C114.054 10.5752 114.381 10.7387 114.578 11.0331C114.807 11.3602 114.937 11.8835 115.036 12.6031C115.134 13.3553 115.166 14.402 115.166 15.743V18.0325H115.134Z" fill="currentColor"></path></svg></a><a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800"><svg class="h-11" viewBox="0 0 208 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.7714 20.729C42.7714 31.9343 33.6867 41.019 22.4814 41.019C11.2747 41.019 2.19141 31.9343 2.19141 20.729C2.19141 9.52228 11.2754 0.438965 22.4814 0.438965C33.6867 0.438965 42.7714 9.52297 42.7714 20.729Z" fill="currentColor"></path><path d="M25.1775 21.3312H20.1389V15.9959H25.1775C25.5278 15.9959 25.8747 16.0649 26.1983 16.1989C26.522 16.333 26.8161 16.5295 27.0638 16.7772C27.3115 17.0249 27.508 17.319 27.6421 17.6427C27.7761 17.9663 27.8451 18.3132 27.8451 18.6635C27.8451 19.0139 27.7761 19.3608 27.6421 19.6844C27.508 20.0081 27.3115 20.3021 27.0638 20.5499C26.8161 20.7976 26.522 20.9941 26.1983 21.1281C25.8747 21.2622 25.5278 21.3312 25.1775 21.3312ZM25.1775 12.439H16.582V30.2234H20.1389V24.8881H25.1775C28.6151 24.8881 31.402 22.1012 31.402 18.6635C31.402 15.2258 28.6151 12.439 25.1775 12.439Z" fill="white"></path><path d="M74.9361 17.4611C74.9361 16.1521 73.9305 15.3588 72.6239 15.3588H69.1216V19.5389H72.6248C73.9313 19.5389 74.9369 18.7457 74.9369 17.4611H74.9361ZM65.8047 28.2977V12.439H73.0901C76.4778 12.439 78.3213 14.7283 78.3213 17.4611C78.3213 20.1702 76.4542 22.4588 73.0901 22.4588H69.1216V28.2977H65.8055H65.8047ZM80.3406 28.2977V16.7362H83.3044V18.2543C84.122 17.2731 85.501 16.4563 86.9027 16.4563V19.3518C86.6912 19.3054 86.4349 19.2826 86.0851 19.2826C85.1039 19.2826 83.7949 19.8424 83.3044 20.5681V28.2977H80.3397H80.3406ZM96.8802 22.3652C96.8802 20.6136 95.8503 19.0955 93.9823 19.0955C92.1364 19.0955 91.1105 20.6136 91.1105 22.366C91.1105 24.1404 92.1364 25.6585 93.9823 25.6585C95.8503 25.6585 96.8794 24.1404 96.8794 22.3652H96.8802ZM88.0263 22.3652C88.0263 19.1663 90.2684 16.4563 93.9823 16.4563C97.7198 16.4563 99.962 19.1655 99.962 22.3652C99.962 25.5649 97.7198 28.2977 93.9823 28.2977C90.2684 28.2977 88.0263 25.5649 88.0263 22.3652ZM109.943 24.3739V20.3801C109.452 19.6316 108.378 19.0955 107.396 19.0955C105.693 19.0955 104.524 20.4265 104.524 22.366C104.524 24.3267 105.693 25.6585 107.396 25.6585C108.378 25.6585 109.452 25.1215 109.943 24.3731V24.3739ZM109.943 28.2977V26.5697C109.054 27.6899 107.841 28.2977 106.462 28.2977C103.637 28.2977 101.465 26.1499 101.465 22.3652C101.465 18.6993 103.59 16.4563 106.462 16.4563C107.793 16.4563 109.054 17.0177 109.943 18.1843V12.439H112.932V28.2977H109.943ZM123.497 28.2977V26.5925C122.727 27.4337 121.372 28.2977 119.526 28.2977C117.052 28.2977 115.884 26.9431 115.884 24.7473V16.7362H118.849V23.5798C118.849 25.1451 119.666 25.6585 120.927 25.6585C122.071 25.6585 122.983 25.028 123.497 24.3731V16.7362H126.463V28.2977H123.497ZM128.69 22.3652C128.69 18.9092 131.212 16.4563 134.67 16.4563C136.982 16.4563 138.383 17.4611 139.131 18.4886L137.191 20.3093C136.655 19.5153 135.838 19.0955 134.81 19.0955C133.011 19.0955 131.751 20.4037 131.751 22.366C131.751 24.3267 133.011 25.6585 134.81 25.6585C135.838 25.6585 136.655 25.1915 137.191 24.4203L139.131 26.2426C138.383 27.2702 136.982 28.2977 134.67 28.2977C131.212 28.2977 128.69 25.8456 128.69 22.3652ZM141.681 25.1915V19.329H139.813V16.7362H141.681V13.6528H144.648V16.7362H146.935V19.329H144.648V24.3975C144.648 25.1215 145.02 25.6585 145.675 25.6585C146.118 25.6585 146.541 25.495 146.702 25.3087L147.334 27.5728C146.891 27.9714 146.096 28.2977 144.857 28.2977C142.779 28.2977 141.681 27.2238 141.681 25.1915ZM165.935 28.2977V21.454H158.577V28.2977H155.263V12.439H158.577V18.5577H165.935V12.4398H169.275V28.2977H165.935ZM179.889 28.2977V26.5925C179.119 27.4337 177.764 28.2977 175.919 28.2977C173.443 28.2977 172.276 26.9431 172.276 24.7473V16.7362H175.241V23.5798C175.241 25.1451 176.058 25.6585 177.32 25.6585C178.464 25.6585 179.376 25.028 179.889 24.3731V16.7362H182.856V28.2977H179.889ZM193.417 28.2977V21.1986C193.417 19.6333 192.602 19.0963 191.339 19.0963C190.172 19.0963 189.285 19.7504 188.77 20.4045V28.2985H185.806V16.7362H188.77V18.1843C189.495 17.3439 190.896 16.4563 192.718 16.4563C195.217 16.4563 196.408 17.8573 196.408 20.0523V28.2977H193.418H193.417ZM199.942 25.1915V19.329H198.076V16.7362H199.943V13.6528H202.91V16.7362H205.198V19.329H202.91V24.3975C202.91 25.1215 203.282 25.6585 203.936 25.6585C204.38 25.6585 204.802 25.495 204.965 25.3087L205.595 27.5728C205.152 27.9714 204.356 28.2977 203.119 28.2977C201.04 28.2977 199.943 27.2238 199.943 25.1915" fill="currentColor"></path></svg></a><a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800"><svg class="h-11" viewBox="0 0 120 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.058 40.5994C31.0322 40.5994 39.9286 31.7031 39.9286 20.7289C39.9286 9.75473 31.0322 0.858398 20.058 0.858398C9.08385 0.858398 0.1875 9.75473 0.1875 20.7289C0.1875 31.7031 9.08385 40.5994 20.058 40.5994Z" fill="currentColor"></path><path d="M33.3139 20.729C33.3139 19.1166 32.0101 17.8362 30.4211 17.8362C29.6388 17.8362 28.9272 18.1442 28.4056 18.6424C26.414 17.2196 23.687 16.2949 20.6518 16.1765L21.9796 9.96387L26.2951 10.8885C26.3429 11.9793 27.2437 12.8567 28.3584 12.8567C29.4965 12.8567 30.4211 11.9321 30.4211 10.7935C30.4211 9.65536 29.4965 8.73071 28.3584 8.73071C27.5522 8.73071 26.8406 9.20497 26.5086 9.89271L21.6954 8.87303C21.553 8.84917 21.4107 8.87303 21.3157 8.94419C21.1972 9.01535 21.1261 9.13381 21.1026 9.27613L19.6321 16.1999C16.5497 16.2949 13.7753 17.2196 11.7599 18.6662C11.2171 18.1478 10.495 17.8589 9.74439 17.86C8.13201 17.86 6.85156 19.1639 6.85156 20.7529C6.85156 21.9383 7.56272 22.9341 8.55897 23.3849C8.51123 23.6691 8.48781 23.9538 8.48781 24.2623C8.48781 28.7197 13.6807 32.348 20.083 32.348C26.4852 32.348 31.6781 28.7436 31.6781 24.2623C31.6781 23.9776 31.6543 23.6691 31.607 23.3849C32.6028 22.9341 33.3139 21.9144 33.3139 20.729ZM13.4434 22.7918C13.4434 21.6536 14.368 20.729 15.5066 20.729C16.6447 20.729 17.5694 21.6536 17.5694 22.7918C17.5694 23.9299 16.6447 24.855 15.5066 24.855C14.368 24.8784 13.4434 23.9299 13.4434 22.7918ZM24.9913 28.2694C23.5685 29.6921 20.8653 29.7872 20.083 29.7872C19.2768 29.7872 16.5736 29.6683 15.1742 28.2694C14.9612 28.0559 14.9612 27.7239 15.1742 27.5105C15.3877 27.2974 15.7196 27.2974 15.9331 27.5105C16.8343 28.4117 18.7314 28.7197 20.083 28.7197C21.4346 28.7197 23.355 28.4117 24.2324 27.5105C24.4459 27.2974 24.7778 27.2974 24.9913 27.5105C25.1809 27.7239 25.1809 28.0559 24.9913 28.2694ZM24.6116 24.8784C23.4735 24.8784 22.5488 23.9538 22.5488 22.8156C22.5488 21.6775 23.4735 20.7529 24.6116 20.7529C25.7502 20.7529 26.6748 21.6775 26.6748 22.8156C26.6748 23.9299 25.7502 24.8784 24.6116 24.8784Z" fill="white"></path><path d="M108.412 16.6268C109.8 16.6268 110.926 15.5014 110.926 14.1132C110.926 12.725 109.8 11.5996 108.412 11.5996C107.024 11.5996 105.898 12.725 105.898 14.1132C105.898 15.5014 107.024 16.6268 108.412 16.6268Z" fill="currentColor"></path><path d="M72.5114 24.8309C73.7446 24.8309 74.4557 23.9063 74.4084 23.0051C74.385 22.5308 74.3373 22.2223 74.29 21.9854C73.5311 18.7133 70.8756 16.2943 67.7216 16.2943C63.9753 16.2943 60.9401 19.6853 60.9401 23.8586C60.9401 28.0318 63.9753 31.4228 67.7216 31.4228C70.0694 31.4228 71.753 30.5693 72.9622 29.2177C73.5549 28.5538 73.4365 27.5341 72.7249 27.036C72.1322 26.6329 71.3972 26.7752 70.8517 27.2256C70.3302 27.6765 69.3344 28.5772 67.7216 28.5772C65.825 28.5772 64.2126 26.941 63.8568 24.7832H72.5114V24.8309ZM67.6981 19.1637C69.4051 19.1637 70.8756 20.4915 71.421 22.3173H63.9752C64.5207 20.468 65.9907 19.1637 67.6981 19.1637ZM61.0824 17.7883C61.0824 17.0771 60.5609 16.5078 59.897 16.3894C57.8338 16.0813 55.8895 16.8397 54.7752 18.2391V18.049C54.7752 17.1717 54.0636 16.6267 53.3525 16.6267C52.5697 16.6267 51.9297 17.2667 51.9297 18.049V29.6681C51.9297 30.427 52.4985 31.0908 53.2574 31.1381C54.0875 31.1854 54.7752 30.5454 54.7752 29.7154V23.7162C54.7752 21.0608 56.7668 18.8791 59.5173 19.1876H59.802C60.5131 19.1399 61.0824 18.5233 61.0824 17.7883ZM109.834 19.306C109.834 18.5233 109.194 17.8833 108.412 17.8833C107.629 17.8833 106.989 18.5233 106.989 19.306V29.7154C106.989 30.4981 107.629 31.1381 108.412 31.1381C109.194 31.1381 109.834 30.4981 109.834 29.7154V19.306ZM88.6829 11.4338C88.6829 10.651 88.0429 10.011 87.2602 10.011C86.4779 10.011 85.8379 10.651 85.8379 11.4338V17.7648C84.8655 16.7924 83.6562 16.3182 82.2096 16.3182C78.4632 16.3182 75.4281 19.7091 75.4281 23.8824C75.4281 28.0557 78.4632 31.4466 82.2096 31.4466C83.6562 31.4466 84.8893 30.9485 85.8613 29.9761C85.9797 30.6405 86.5729 31.1381 87.2602 31.1381C88.0429 31.1381 88.6829 30.4981 88.6829 29.7154V11.4338ZM82.2334 28.6245C80.0518 28.6245 78.2971 26.5145 78.2971 23.8824C78.2971 21.2742 80.0518 19.1399 82.2334 19.1399C84.4151 19.1399 86.1698 21.2504 86.1698 23.8824C86.1698 26.5145 84.3912 28.6245 82.2334 28.6245ZM103.527 11.4338C103.527 10.651 102.887 10.011 102.104 10.011C101.322 10.011 100.681 10.651 100.681 11.4338V17.7648C99.7093 16.7924 98.5 16.3182 97.0534 16.3182C93.307 16.3182 90.2719 19.7091 90.2719 23.8824C90.2719 28.0557 93.307 31.4466 97.0534 31.4466C98.5 31.4466 99.7327 30.9485 100.705 29.9761C100.824 30.6405 101.416 31.1381 102.104 31.1381C102.887 31.1381 103.527 30.4981 103.527 29.7154V11.4338ZM97.0534 28.6245C94.8717 28.6245 93.1174 26.5145 93.1174 23.8824C93.1174 21.2742 94.8717 19.1399 97.0534 19.1399C99.235 19.1399 100.99 21.2504 100.99 23.8824C100.99 26.5145 99.235 28.6245 97.0534 28.6245ZM117.042 29.7392V19.1637H118.299C118.963 19.1637 119.556 18.6656 119.603 17.9779C119.651 17.2428 119.058 16.6267 118.347 16.6267H117.042V14.6347C117.042 13.8758 116.474 13.2119 115.715 13.1646C114.885 13.1173 114.197 13.7573 114.197 14.5874V16.6501H113.011C112.348 16.6501 111.755 17.1483 111.708 17.836C111.66 18.571 112.253 19.1876 112.964 19.1876H114.173V29.7631C114.173 30.5454 114.814 31.1854 115.596 31.1854C116.426 31.1381 117.042 30.5216 117.042 29.7392Z" fill="currentColor"></path></svg></a></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Layouts/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hero
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "UserLayouts",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      initFlowbite();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Layouts/UserLayouts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "CartList",
  __ssrInlineRender: true,
  props: {
    userAddress: Object
  },
  setup(__props) {
    const carts = computed(() => usePage().props.cart.data.items);
    const products = computed(() => usePage().props.cart.data.products);
    const total = computed(() => usePage().props.cart.data.total);
    const itemId = (id) => carts.value.findIndex((item) => item.product_id === id);
    const form = reactive({
      address1: null,
      state: null,
      city: null,
      zipcode: null,
      country_code: null,
      type: null
    });
    const formFilled = computed(() => {
      return form.address1 !== null && form.state !== null && form.city !== null && form.zipcode !== null && form.country_code !== null && form.type !== null;
    });
    const update = (product, quantity) => router.patch(route("cart.update", product), {
      quantity
    });
    const remove = (product) => router.delete(route("cart.delete", product));
    function submit() {
      router.visit(route("checkout.store"), {
        method: "post",
        data: {
          carts: usePage().props.cart.data.items,
          products: usePage().props.cart.data.products,
          total: usePage().props.cart.data.total,
          address: form
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="text-gray-600 body-font relative"${_scopeId}><div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"${_scopeId}><div class="lg:w-2/3 md:w-1/2 rounded-lg sm:mr-10 p-10"${_scopeId}><table class="w-full text-sm text-left text-gray-500"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3"${_scopeId}><span class="sr-only"${_scopeId}>Image</span></th><th scope="col" class="px-6 py-3"${_scopeId}> Product </th><th scope="col" class="px-6 py-3"${_scopeId}> Qty </th><th scope="col" class="px-6 py-3"${_scopeId}> Price </th><th scope="col" class="px-6 py-3"${_scopeId}> Action </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(products.value, (product) => {
              _push2(`<tr class="bg-white border-b hover:bg-gray-50"${_scopeId}><td class="w-32 p-4"${_scopeId}>`);
              if (product.product_images.length > 0) {
                _push2(`<img${ssrRenderAttr("src", `/${product.product_images[0].image}`)} alt="Apple Watch"${_scopeId}>`);
              } else {
                _push2(`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png" alt="Apple Watch"${_scopeId}>`);
              }
              _push2(`</td><td class="px-6 py-4 font-semibold text-gray-900"${_scopeId}>${ssrInterpolate(product.title)}</td><td class="px-6 py-4"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><button${ssrIncludeBooleanAttr(carts.value[itemId(product.id)].quantity <= 1) ? " disabled" : ""} class="${ssrRenderClass([carts.value[itemId(product.id)].quantity > 1 ? "cursor-pointer text-purple-600" : "cursor-not-allowed text-gray-300", "inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"])}" type="button"${_scopeId}><span class="sr-only"${_scopeId}>Quantity button</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"${_scopeId}></path></svg></button><div${_scopeId}><input type="number" id="first_product"${ssrRenderAttr("value", carts.value[itemId(product.id)].quantity)} class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1" placeholder="1" required${_scopeId}></div><button class="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button"${_scopeId}><span class="sr-only"${_scopeId}>Quantity button</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"${_scopeId}></path></svg></button></div></td><td class="px-6 py-4 font-semibold text-gray-900"${_scopeId}> $${ssrInterpolate(product.price)}</td><td class="px-6 py-4"${_scopeId}><a class="font-medium text-red-600 hover:underline"${_scopeId}>Remove</a></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"${_scopeId}><h2 class="text-gray-900 text-lg mb-1 font-medium title-font"${_scopeId}>Summary</h2><p class="leading-relaxed mb-5 text-gray-600"${_scopeId}>Total : $ ${ssrInterpolate(total.value)}</p>`);
            if (__props.userAddress) {
              _push2(`<div${_scopeId}><h2 class="text-gray-900 text-lg mb-1 font-medium title-font"${_scopeId}>Shipping Address</h2><p class="leading-relaxed mb-5 text-gray-600"${_scopeId}>${ssrInterpolate(__props.userAddress.address1)} , ${ssrInterpolate(__props.userAddress.city)}, ${ssrInterpolate(__props.userAddress.zipcode)}</p><p class="leading-relaxed mb-5 text-gray-600"${_scopeId}>or you can add new below</p></div>`);
            } else {
              _push2(`<div${_scopeId}><p class="leading-relaxed mb-5 text-gray-600"${_scopeId}> Add shipping address to continue</p></div>`);
            }
            _push2(`<form${_scopeId}><div class="relative mb-4"${_scopeId}><label for="name" class="leading-7 text-sm text-gray-600"${_scopeId}>Address 1</label><input type="text" id="name" name="address1"${ssrRenderAttr("value", form.address1)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${_scopeId}></div><div class="relative mb-4"${_scopeId}><label for="email" class="leading-7 text-sm text-gray-600"${_scopeId}>City</label><input type="text" id="email" name="city"${ssrRenderAttr("value", form.city)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${_scopeId}></div><div class="relative mb-4"${_scopeId}><label for="email" class="leading-7 text-sm text-gray-600"${_scopeId}>State</label><input type="text" id="email" name="state"${ssrRenderAttr("value", form.state)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${_scopeId}></div><div class="relative mb-4"${_scopeId}><label for="email" class="leading-7 text-sm text-gray-600"${_scopeId}>Zipcode</label><input type="text" id="email" name="zipcode"${ssrRenderAttr("value", form.zipcode)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${_scopeId}></div><div class="relative mb-4"${_scopeId}><label for="email" class="leading-7 text-sm text-gray-600"${_scopeId}>Country Code</label><input type="text" id="email" name="countrycode"${ssrRenderAttr("value", form.country_code)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${_scopeId}></div><div class="relative mb-4"${_scopeId}><label for="email" class="leading-7 text-sm text-gray-600"${_scopeId}>Address type</label><input type="text" id="email" name="type"${ssrRenderAttr("value", form.type)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${_scopeId}></div>`);
            if (formFilled.value || __props.userAddress) {
              _push2(`<button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"${_scopeId}>Checkout</button>`);
            } else {
              _push2(`<button type="submit" class="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"${_scopeId}>Add Address to continue</button>`);
            }
            _push2(`</form><p class="text-xs text-gray-500 mt-3"${_scopeId}>Continue Shopping </p></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "text-gray-600 body-font relative" }, [
                createVNode("div", { class: "container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap" }, [
                  createVNode("div", { class: "lg:w-2/3 md:w-1/2 rounded-lg sm:mr-10 p-10" }, [
                    createVNode("table", { class: "w-full text-sm text-left text-gray-500" }, [
                      createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50" }, [
                        createVNode("tr", null, [
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3"
                          }, [
                            createVNode("span", { class: "sr-only" }, "Image")
                          ]),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3"
                          }, " Product "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3"
                          }, " Qty "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3"
                          }, " Price "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-6 py-3"
                          }, " Action ")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(products.value, (product) => {
                          return openBlock(), createBlock("tr", {
                            key: product.id,
                            class: "bg-white border-b hover:bg-gray-50"
                          }, [
                            createVNode("td", { class: "w-32 p-4" }, [
                              product.product_images.length > 0 ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: `/${product.product_images[0].image}`,
                                alt: "Apple Watch"
                              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",
                                alt: "Apple Watch"
                              }))
                            ]),
                            createVNode("td", { class: "px-6 py-4 font-semibold text-gray-900" }, toDisplayString(product.title), 1),
                            createVNode("td", { class: "px-6 py-4" }, [
                              createVNode("div", { class: "flex items-center space-x-3" }, [
                                createVNode("button", {
                                  onClick: withModifiers(($event) => update(product, carts.value[itemId(product.id)].quantity - 1), ["prevent"]),
                                  disabled: carts.value[itemId(product.id)].quantity <= 1,
                                  class: [carts.value[itemId(product.id)].quantity > 1 ? "cursor-pointer text-purple-600" : "cursor-not-allowed text-gray-300", "inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"],
                                  type: "button"
                                }, [
                                  createVNode("span", { class: "sr-only" }, "Quantity button"),
                                  (openBlock(), createBlock("svg", {
                                    class: "w-3 h-3",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 18 2"
                                  }, [
                                    createVNode("path", {
                                      stroke: "currentColor",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M1 1h16"
                                    })
                                  ]))
                                ], 10, ["onClick", "disabled"]),
                                createVNode("div", null, [
                                  withDirectives(createVNode("input", {
                                    type: "number",
                                    id: "first_product",
                                    "onUpdate:modelValue": ($event) => carts.value[itemId(product.id)].quantity = $event,
                                    class: "bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1",
                                    placeholder: "1",
                                    required: ""
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, carts.value[itemId(product.id)].quantity]
                                  ])
                                ]),
                                createVNode("button", {
                                  onClick: withModifiers(($event) => update(product, carts.value[itemId(product.id)].quantity + 1), ["prevent"]),
                                  class: "inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200",
                                  type: "button"
                                }, [
                                  createVNode("span", { class: "sr-only" }, "Quantity button"),
                                  (openBlock(), createBlock("svg", {
                                    class: "w-3 h-3",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 18 18"
                                  }, [
                                    createVNode("path", {
                                      stroke: "currentColor",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M9 1v16M1 9h16"
                                    })
                                  ]))
                                ], 8, ["onClick"])
                              ])
                            ]),
                            createVNode("td", { class: "px-6 py-4 font-semibold text-gray-900" }, " $" + toDisplayString(product.price), 1),
                            createVNode("td", { class: "px-6 py-4" }, [
                              createVNode("a", {
                                onClick: ($event) => remove(product),
                                class: "font-medium text-red-600 hover:underline"
                              }, "Remove", 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" }, [
                    createVNode("h2", { class: "text-gray-900 text-lg mb-1 font-medium title-font" }, "Summary"),
                    createVNode("p", { class: "leading-relaxed mb-5 text-gray-600" }, "Total : $ " + toDisplayString(total.value), 1),
                    __props.userAddress ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("h2", { class: "text-gray-900 text-lg mb-1 font-medium title-font" }, "Shipping Address"),
                      createVNode("p", { class: "leading-relaxed mb-5 text-gray-600" }, toDisplayString(__props.userAddress.address1) + " , " + toDisplayString(__props.userAddress.city) + ", " + toDisplayString(__props.userAddress.zipcode), 1),
                      createVNode("p", { class: "leading-relaxed mb-5 text-gray-600" }, "or you can add new below")
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("p", { class: "leading-relaxed mb-5 text-gray-600" }, " Add shipping address to continue")
                    ])),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", { class: "relative mb-4" }, [
                        createVNode("label", {
                          for: "name",
                          class: "leading-7 text-sm text-gray-600"
                        }, "Address 1"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "name",
                          name: "address1",
                          "onUpdate:modelValue": ($event) => form.address1 = $event,
                          class: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.address1]
                        ])
                      ]),
                      createVNode("div", { class: "relative mb-4" }, [
                        createVNode("label", {
                          for: "email",
                          class: "leading-7 text-sm text-gray-600"
                        }, "City"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "email",
                          name: "city",
                          "onUpdate:modelValue": ($event) => form.city = $event,
                          class: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.city]
                        ])
                      ]),
                      createVNode("div", { class: "relative mb-4" }, [
                        createVNode("label", {
                          for: "email",
                          class: "leading-7 text-sm text-gray-600"
                        }, "State"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "email",
                          name: "state",
                          "onUpdate:modelValue": ($event) => form.state = $event,
                          class: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.state]
                        ])
                      ]),
                      createVNode("div", { class: "relative mb-4" }, [
                        createVNode("label", {
                          for: "email",
                          class: "leading-7 text-sm text-gray-600"
                        }, "Zipcode"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "email",
                          name: "zipcode",
                          "onUpdate:modelValue": ($event) => form.zipcode = $event,
                          class: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.zipcode]
                        ])
                      ]),
                      createVNode("div", { class: "relative mb-4" }, [
                        createVNode("label", {
                          for: "email",
                          class: "leading-7 text-sm text-gray-600"
                        }, "Country Code"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "email",
                          name: "countrycode",
                          "onUpdate:modelValue": ($event) => form.country_code = $event,
                          class: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.country_code]
                        ])
                      ]),
                      createVNode("div", { class: "relative mb-4" }, [
                        createVNode("label", {
                          for: "email",
                          class: "leading-7 text-sm text-gray-600"
                        }, "Address type"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "email",
                          name: "type",
                          "onUpdate:modelValue": ($event) => form.type = $event,
                          class: "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.type]
                        ])
                      ]),
                      formFilled.value || __props.userAddress ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "submit",
                        class: "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      }, "Checkout")) : (openBlock(), createBlock("button", {
                        key: 1,
                        type: "submit",
                        class: "text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
                      }, "Add Address to continue"))
                    ], 32),
                    createVNode("p", { class: "text-xs text-gray-500 mt-3" }, "Continue Shopping ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/CartList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "Products",
  __ssrInlineRender: true,
  props: {
    products: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.products, (product) => {
        _push(`<div class="group relative"><div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">`);
        if (product.product_images.length > 0) {
          _push(`<img${ssrRenderAttr("src", `${product.product_images[0].image}`)}${ssrRenderAttr("alt", product.imageAlt)} class="h-full w-full object-cover object-center lg:h-full lg:w-full">`);
        } else {
          _push(`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"${ssrRenderAttr("alt", product.imageAlt)} class="h-full w-full object-cover object-center lg:h-full lg:w-full">`);
        }
        _push(`<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"><div class="bg-blue-700 p-2 rounded-full"><a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg></a></div><div class="bg-blue-700 p-2 rounded-full ml-2"><a${ssrRenderAttr("href", `/products/` + product.slug)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></a></div></div></div><div class="mt-4 flex justify-between"><div><h3 class="text-sm text-gray-700"><span aria-hidden="true" class=""></span> ${ssrInterpolate(product.title)}</h3><p class="mt-1 text-sm text-gray-500">${ssrInterpolate(product.brand.name)}</p></div><p class="text-sm font-medium text-gray-900">R$${ssrInterpolate(product.price)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Components/Products.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    orders: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative max-w-screen-xl py-24 mx-auto overflow-x-auto"${_scopeId}><!--[-->`);
            ssrRenderList(__props.orders, (order) => {
              _push2(`<table style="${ssrRenderStyle(order.order_items.length > 0 ? null : { display: "none" })}" class="w-full text-sm text-left text-gray-500 mb-5"${_scopeId}><thead class="text-xs text-gray-700 uppercase"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3"${_scopeId}> Order ID # ${ssrInterpolate(order.id)}</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(order.order_items, (item) => {
                _push2(`<tr class="bg-white border-b"${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.product.title)}</th><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.product.brand.name)}</td><td class="px-6 py-4"${_scopeId}>${ssrInterpolate(item.product.category.name)}</td><td class="px-6 py-4"${_scopeId}> $${ssrInterpolate(item.product.price)}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "relative max-w-screen-xl py-24 mx-auto overflow-x-auto" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.orders, (order) => {
                  return withDirectives((openBlock(), createBlock("table", {
                    key: order.id,
                    class: "w-full text-sm text-left text-gray-500 mb-5"
                  }, [
                    createVNode("thead", { class: "text-xs text-gray-700 uppercase" }, [
                      createVNode("tr", null, [
                        createVNode("th", {
                          scope: "col",
                          class: "px-6 py-3"
                        }, " Order ID # " + toDisplayString(order.id), 1)
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(order.order_items, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          class: "bg-white border-b"
                        }, [
                          createVNode("th", {
                            scope: "row",
                            class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          }, toDisplayString(item.product.title), 1),
                          createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.product.brand.name), 1),
                          createVNode("td", { class: "px-6 py-4" }, toDisplayString(item.product.category.name), 1),
                          createVNode("td", { class: "px-6 py-4" }, " $" + toDisplayString(item.product.price), 1)
                        ]);
                      }), 128))
                    ])
                  ])), [
                    [vShow, order.order_items.length > 0]
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Dashboard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    products: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Hero, null, null, _parent2, _scopeId));
            _push2(`<div class="bg-white"${_scopeId}><div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"${_scopeId}><h2 class="text-2xl font-bold tracking-tight text-gray-900"${_scopeId}>List of products</h2>`);
            _push2(ssrRenderComponent(_sfc_main$5, { products: __props.products }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-center mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products.index"),
              class: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Visualizar todos Imóveis`);
                } else {
                  return [
                    createTextVNode(" Visualizar todos Imóveis")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(Hero),
              createVNode("div", { class: "bg-white" }, [
                createVNode("div", { class: "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" }, [
                  createVNode("h2", { class: "text-2xl font-bold tracking-tight text-gray-900" }, "List of products"),
                  createVNode(_sfc_main$5, { products: __props.products }, null, 8, ["products"]),
                  createVNode("div", { class: "flex justify-center mt-5" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("products.index"),
                      class: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Visualizar todos Imóveis")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "ProductDetail",
  __ssrInlineRender: true,
  props: {
    product: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white" style="${ssrRenderStyle({ "padding": "50px" })}"${_scopeId}><div class="box p-5"${_scopeId}><div class="image"${_scopeId}>`);
            if (__props.product.product_images.length > 0) {
              _push2(`<img${ssrRenderAttr("src", `${__props.product.product_images[0].image}`)} alt="Apple Watch"${_scopeId}>`);
            } else {
              _push2(`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png" alt="Apple Watch"${_scopeId}>`);
            }
            _push2(`</div><div class="mt-4 flex justify-between boxRight"${_scopeId}><div${_scopeId}><h3 class="text-lg text-gray-700"${_scopeId}><span aria-hidden="true" class=""${_scopeId}></span> ${ssrInterpolate(__props.product.title)}</h3><p class="mt-1 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(__props.product.id)}</p><p class="mt-1 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(__props.product.slug)}</p><p class="mt-1 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(__props.product.brand.name)}</p><p class="mt-1 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(__props.product.category.name)}</p></div><p class="text-sm font-medium text-gray-900"${_scopeId}>$${ssrInterpolate(__props.product.price)}</p></div></div><div class="boxDesc"${_scopeId}><span style="${ssrRenderStyle({ "font-size": "24px" })}"${_scopeId}>Descrição</span><span${_scopeId}>${ssrInterpolate(__props.product.description)}</span></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "bg-white",
                style: { "padding": "50px" }
              }, [
                createVNode("div", { class: "box p-5" }, [
                  createVNode("div", { class: "image" }, [
                    __props.product.product_images.length > 0 ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: `${__props.product.product_images[0].image}`,
                      alt: "Apple Watch"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png",
                      alt: "Apple Watch"
                    }))
                  ]),
                  createVNode("div", { class: "mt-4 flex justify-between boxRight" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg text-gray-700" }, [
                        createVNode("span", {
                          "aria-hidden": "true",
                          class: ""
                        }),
                        createTextVNode(" " + toDisplayString(__props.product.title), 1)
                      ]),
                      createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(__props.product.id), 1),
                      createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(__props.product.slug), 1),
                      createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(__props.product.brand.name), 1),
                      createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(__props.product.category.name), 1)
                    ]),
                    createVNode("p", { class: "text-sm font-medium text-gray-900" }, "$" + toDisplayString(__props.product.price), 1)
                  ])
                ]),
                createVNode("div", { class: "boxDesc" }, [
                  createVNode("span", { style: { "font-size": "24px" } }, "Descrição"),
                  createVNode("span", null, toDisplayString(__props.product.description), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/ProductDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "ProductList",
  __ssrInlineRender: true,
  props: {
    products: Object,
    brands: Array,
    categories: Array
  },
  setup(__props) {
    const sortOptions = [
      { name: "Most Popular", href: "#", current: true },
      { name: "Best Rating", href: "#", current: false },
      { name: "Newest", href: "#", current: false },
      { name: "Price: Low to High", href: "#", current: false },
      { name: "Price: High to Low", href: "#", current: false }
    ];
    const filterPrices = useForm({
      prices: [0, 1e5]
    });
    const priceFilter = () => {
      filterPrices.transform((data) => ({
        ...data,
        prices: {
          from: filterPrices.prices[0],
          to: filterPrices.prices[1]
        }
      })).get("products", {
        preserveState: true,
        replace: true
      });
    };
    const mobileFiltersOpen = ref(false);
    const selectedBrands = ref([]);
    const selectedCategories = ref([]);
    watch(selectedBrands, () => {
      updateFilteredProducts();
    });
    watch(selectedCategories, () => {
      updateFilteredProducts();
    });
    function updateFilteredProducts() {
      router.get("products", {
        brands: selectedBrands.value,
        categories: selectedCategories.value
      }, {
        preserveState: true,
        replace: true
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(TransitionRoot), {
              as: "template",
              show: mobileFiltersOpen.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Dialog), {
                    as: "div",
                    class: "relative z-40 lg:hidden",
                    onClose: ($event) => mobileFiltersOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TransitionChild), {
                          as: "template",
                          enter: "transition-opacity ease-linear duration-300",
                          "enter-from": "opacity-0",
                          "enter-to": "opacity-100",
                          leave: "transition-opacity ease-linear duration-300",
                          "leave-from": "opacity-100",
                          "leave-to": "opacity-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="fixed inset-0 bg-black bg-opacity-25"${_scopeId4}></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="fixed inset-0 z-40 flex"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(TransitionChild), {
                          as: "template",
                          enter: "transition ease-in-out duration-300 transform",
                          "enter-from": "translate-x-full",
                          "enter-to": "translate-x-0",
                          leave: "transition ease-in-out duration-300 transform",
                          "leave-from": "translate-x-0",
                          "leave-to": "translate-x-full"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex items-center justify-between px-4"${_scopeId5}><h2 class="text-lg font-medium text-gray-900"${_scopeId5}>Filters</h2><button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"${_scopeId5}><span class="sr-only"${_scopeId5}>Close menu</span>`);
                                    _push6(ssrRenderComponent(unref(XMarkIcon), {
                                      class: "h-6 w-6",
                                      "aria-hidden": "true"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</button></div><form class="mt-4 border-t border-gray-200"${_scopeId5}><h3 class="sr-only"${_scopeId5}>Categories</h3><ul role="list" class="px-2 py-3 font-medium text-gray-900"${_scopeId5}><!--[-->`);
                                    ssrRenderList(_ctx.subCategories, (category) => {
                                      _push6(`<li${_scopeId5}><a${ssrRenderAttr("href", category.href)} class="block px-2 py-3"${_scopeId5}>${ssrInterpolate(category.name)}</a></li>`);
                                    });
                                    _push6(`<!--]--></ul><!--[-->`);
                                    ssrRenderList(_ctx.filters, (section) => {
                                      _push6(ssrRenderComponent(unref(Disclosure), {
                                        as: "div",
                                        key: section.id,
                                        class: "border-t border-gray-200 px-4 py-6"
                                      }, {
                                        default: withCtx(({ open }, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<h3 class="-mx-2 -my-3 flow-root"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span class="font-medium text-gray-900"${_scopeId7}>${ssrInterpolate(section.name)}</span><span class="ml-6 flex items-center"${_scopeId7}>`);
                                                  if (!open) {
                                                    _push8(ssrRenderComponent(unref(PlusIcon), {
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(ssrRenderComponent(unref(MinusIcon), {
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }, null, _parent8, _scopeId7));
                                                  }
                                                  _push8(`</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(section.name), 1),
                                                    createVNode("span", { class: "ml-6 flex items-center" }, [
                                                      !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                        key: 0,
                                                        class: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                      })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                        key: 1,
                                                        class: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                      }))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</h3>`);
                                            _push7(ssrRenderComponent(unref(DisclosurePanel), { class: "pt-6" }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="space-y-6"${_scopeId7}><!--[-->`);
                                                  ssrRenderList(section.options, (option, optionIdx) => {
                                                    _push8(`<div class="flex items-center"${_scopeId7}><input${ssrRenderAttr("id", `filter-mobile-${section.id}-${optionIdx}`)}${ssrRenderAttr("name", `${section.id}[]`)}${ssrRenderAttr("value", option.value)} type="checkbox"${ssrIncludeBooleanAttr(option.checked) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"${_scopeId7}><label${ssrRenderAttr("for", `filter-mobile-${section.id}-${optionIdx}`)} class="ml-3 min-w-0 flex-1 text-gray-500"${_scopeId7}>${ssrInterpolate(option.label)}</label></div>`);
                                                  });
                                                  _push8(`<!--]--></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "space-y-6" }, [
                                                      (openBlock(true), createBlock(Fragment, null, renderList(section.options, (option, optionIdx) => {
                                                        return openBlock(), createBlock("div", {
                                                          key: option.value,
                                                          class: "flex items-center"
                                                        }, [
                                                          createVNode("input", {
                                                            id: `filter-mobile-${section.id}-${optionIdx}`,
                                                            name: `${section.id}[]`,
                                                            value: option.value,
                                                            type: "checkbox",
                                                            checked: option.checked,
                                                            class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                          }, null, 8, ["id", "name", "value", "checked"]),
                                                          createVNode("label", {
                                                            for: `filter-mobile-${section.id}-${optionIdx}`,
                                                            class: "ml-3 min-w-0 flex-1 text-gray-500"
                                                          }, toDisplayString(option.label), 9, ["for"])
                                                        ]);
                                                      }), 128))
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode("h3", { class: "-mx-2 -my-3 flow-root" }, [
                                                createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(section.name), 1),
                                                    createVNode("span", { class: "ml-6 flex items-center" }, [
                                                      !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                        key: 0,
                                                        class: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                      })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                        key: 1,
                                                        class: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                      }))
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "space-y-6" }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(section.options, (option, optionIdx) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: option.value,
                                                        class: "flex items-center"
                                                      }, [
                                                        createVNode("input", {
                                                          id: `filter-mobile-${section.id}-${optionIdx}`,
                                                          name: `${section.id}[]`,
                                                          value: option.value,
                                                          type: "checkbox",
                                                          checked: option.checked,
                                                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        }, null, 8, ["id", "name", "value", "checked"]),
                                                        createVNode("label", {
                                                          for: `filter-mobile-${section.id}-${optionIdx}`,
                                                          class: "ml-3 min-w-0 flex-1 text-gray-500"
                                                        }, toDisplayString(option.label), 9, ["for"])
                                                      ]);
                                                    }), 128))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]--></form>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                        createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                        createVNode("button", {
                                          type: "button",
                                          class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                          onClick: ($event) => mobileFiltersOpen.value = false
                                        }, [
                                          createVNode("span", { class: "sr-only" }, "Close menu"),
                                          createVNode(unref(XMarkIcon), {
                                            class: "h-6 w-6",
                                            "aria-hidden": "true"
                                          })
                                        ], 8, ["onClick"])
                                      ]),
                                      createVNode("form", { class: "mt-4 border-t border-gray-200" }, [
                                        createVNode("h3", { class: "sr-only" }, "Categories"),
                                        createVNode("ul", {
                                          role: "list",
                                          class: "px-2 py-3 font-medium text-gray-900"
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.subCategories, (category) => {
                                            return openBlock(), createBlock("li", {
                                              key: category.name
                                            }, [
                                              createVNode("a", {
                                                href: category.href,
                                                class: "block px-2 py-3"
                                              }, toDisplayString(category.name), 9, ["href"])
                                            ]);
                                          }), 128))
                                        ]),
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filters, (section) => {
                                          return openBlock(), createBlock(unref(Disclosure), {
                                            as: "div",
                                            key: section.id,
                                            class: "border-t border-gray-200 px-4 py-6"
                                          }, {
                                            default: withCtx(({ open }) => [
                                              createVNode("h3", { class: "-mx-2 -my-3 flow-root" }, [
                                                createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(section.name), 1),
                                                    createVNode("span", { class: "ml-6 flex items-center" }, [
                                                      !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                        key: 0,
                                                        class: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                      })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                        key: 1,
                                                        class: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                      }))
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "space-y-6" }, [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(section.options, (option, optionIdx) => {
                                                      return openBlock(), createBlock("div", {
                                                        key: option.value,
                                                        class: "flex items-center"
                                                      }, [
                                                        createVNode("input", {
                                                          id: `filter-mobile-${section.id}-${optionIdx}`,
                                                          name: `${section.id}[]`,
                                                          value: option.value,
                                                          type: "checkbox",
                                                          checked: option.checked,
                                                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        }, null, 8, ["id", "name", "value", "checked"]),
                                                        createVNode("label", {
                                                          for: `filter-mobile-${section.id}-${optionIdx}`,
                                                          class: "ml-3 min-w-0 flex-1 text-gray-500"
                                                        }, toDisplayString(option.label), 9, ["for"])
                                                      ]);
                                                    }), 128))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                      createVNode("button", {
                                        type: "button",
                                        class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                        onClick: ($event) => mobileFiltersOpen.value = false
                                      }, [
                                        createVNode("span", { class: "sr-only" }, "Close menu"),
                                        createVNode(unref(XMarkIcon), {
                                          class: "h-6 w-6",
                                          "aria-hidden": "true"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    createVNode("form", { class: "mt-4 border-t border-gray-200" }, [
                                      createVNode("h3", { class: "sr-only" }, "Categories"),
                                      createVNode("ul", {
                                        role: "list",
                                        class: "px-2 py-3 font-medium text-gray-900"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.subCategories, (category) => {
                                          return openBlock(), createBlock("li", {
                                            key: category.name
                                          }, [
                                            createVNode("a", {
                                              href: category.href,
                                              class: "block px-2 py-3"
                                            }, toDisplayString(category.name), 9, ["href"])
                                          ]);
                                        }), 128))
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filters, (section) => {
                                        return openBlock(), createBlock(unref(Disclosure), {
                                          as: "div",
                                          key: section.id,
                                          class: "border-t border-gray-200 px-4 py-6"
                                        }, {
                                          default: withCtx(({ open }) => [
                                            createVNode("h3", { class: "-mx-2 -my-3 flow-root" }, [
                                              createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(section.name), 1),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "space-y-6" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(section.options, (option, optionIdx) => {
                                                    return openBlock(), createBlock("div", {
                                                      key: option.value,
                                                      class: "flex items-center"
                                                    }, [
                                                      createVNode("input", {
                                                        id: `filter-mobile-${section.id}-${optionIdx}`,
                                                        name: `${section.id}[]`,
                                                        value: option.value,
                                                        type: "checkbox",
                                                        checked: option.checked,
                                                        class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                      }, null, 8, ["id", "name", "value", "checked"]),
                                                      createVNode("label", {
                                                        for: `filter-mobile-${section.id}-${optionIdx}`,
                                                        class: "ml-3 min-w-0 flex-1 text-gray-500"
                                                      }, toDisplayString(option.label), 9, ["for"])
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "transition-opacity ease-linear duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "transition-opacity ease-linear duration-300",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                            createVNode(unref(TransitionChild), {
                              as: "template",
                              enter: "transition ease-in-out duration-300 transform",
                              "enter-from": "translate-x-full",
                              "enter-to": "translate-x-0",
                              leave: "transition ease-in-out duration-300 transform",
                              "leave-from": "translate-x-0",
                              "leave-to": "translate-x-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                      createVNode("button", {
                                        type: "button",
                                        class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                        onClick: ($event) => mobileFiltersOpen.value = false
                                      }, [
                                        createVNode("span", { class: "sr-only" }, "Close menu"),
                                        createVNode(unref(XMarkIcon), {
                                          class: "h-6 w-6",
                                          "aria-hidden": "true"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    createVNode("form", { class: "mt-4 border-t border-gray-200" }, [
                                      createVNode("h3", { class: "sr-only" }, "Categories"),
                                      createVNode("ul", {
                                        role: "list",
                                        class: "px-2 py-3 font-medium text-gray-900"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.subCategories, (category) => {
                                          return openBlock(), createBlock("li", {
                                            key: category.name
                                          }, [
                                            createVNode("a", {
                                              href: category.href,
                                              class: "block px-2 py-3"
                                            }, toDisplayString(category.name), 9, ["href"])
                                          ]);
                                        }), 128))
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filters, (section) => {
                                        return openBlock(), createBlock(unref(Disclosure), {
                                          as: "div",
                                          key: section.id,
                                          class: "border-t border-gray-200 px-4 py-6"
                                        }, {
                                          default: withCtx(({ open }) => [
                                            createVNode("h3", { class: "-mx-2 -my-3 flow-root" }, [
                                              createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(section.name), 1),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "space-y-6" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(section.options, (option, optionIdx) => {
                                                    return openBlock(), createBlock("div", {
                                                      key: option.value,
                                                      class: "flex items-center"
                                                    }, [
                                                      createVNode("input", {
                                                        id: `filter-mobile-${section.id}-${optionIdx}`,
                                                        name: `${section.id}[]`,
                                                        value: option.value,
                                                        type: "checkbox",
                                                        checked: option.checked,
                                                        class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                      }, null, 8, ["id", "name", "value", "checked"]),
                                                      createVNode("label", {
                                                        for: `filter-mobile-${section.id}-${optionIdx}`,
                                                        class: "ml-3 min-w-0 flex-1 text-gray-500"
                                                      }, toDisplayString(option.label), 9, ["for"])
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Dialog), {
                      as: "div",
                      class: "relative z-40 lg:hidden",
                      onClose: ($event) => mobileFiltersOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "transition-opacity ease-linear duration-300",
                          "enter-from": "opacity-0",
                          "enter-to": "opacity-100",
                          leave: "transition-opacity ease-linear duration-300",
                          "leave-from": "opacity-100",
                          "leave-to": "opacity-0"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "transition ease-in-out duration-300 transform",
                            "enter-from": "translate-x-full",
                            "enter-to": "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            "leave-from": "translate-x-0",
                            "leave-to": "translate-x-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                    createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                    createVNode("button", {
                                      type: "button",
                                      class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                      onClick: ($event) => mobileFiltersOpen.value = false
                                    }, [
                                      createVNode("span", { class: "sr-only" }, "Close menu"),
                                      createVNode(unref(XMarkIcon), {
                                        class: "h-6 w-6",
                                        "aria-hidden": "true"
                                      })
                                    ], 8, ["onClick"])
                                  ]),
                                  createVNode("form", { class: "mt-4 border-t border-gray-200" }, [
                                    createVNode("h3", { class: "sr-only" }, "Categories"),
                                    createVNode("ul", {
                                      role: "list",
                                      class: "px-2 py-3 font-medium text-gray-900"
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.subCategories, (category) => {
                                        return openBlock(), createBlock("li", {
                                          key: category.name
                                        }, [
                                          createVNode("a", {
                                            href: category.href,
                                            class: "block px-2 py-3"
                                          }, toDisplayString(category.name), 9, ["href"])
                                        ]);
                                      }), 128))
                                    ]),
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filters, (section) => {
                                      return openBlock(), createBlock(unref(Disclosure), {
                                        as: "div",
                                        key: section.id,
                                        class: "border-t border-gray-200 px-4 py-6"
                                      }, {
                                        default: withCtx(({ open }) => [
                                          createVNode("h3", { class: "-mx-2 -my-3 flow-root" }, [
                                            createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(section.name), 1),
                                                createVNode("span", { class: "ml-6 flex items-center" }, [
                                                  !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                    key: 0,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                    key: 1,
                                                    class: "h-5 w-5",
                                                    "aria-hidden": "true"
                                                  }))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "space-y-6" }, [
                                                (openBlock(true), createBlock(Fragment, null, renderList(section.options, (option, optionIdx) => {
                                                  return openBlock(), createBlock("div", {
                                                    key: option.value,
                                                    class: "flex items-center"
                                                  }, [
                                                    createVNode("input", {
                                                      id: `filter-mobile-${section.id}-${optionIdx}`,
                                                      name: `${section.id}[]`,
                                                      value: option.value,
                                                      type: "checkbox",
                                                      checked: option.checked,
                                                      class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    }, null, 8, ["id", "name", "value", "checked"]),
                                                    createVNode("label", {
                                                      for: `filter-mobile-${section.id}-${optionIdx}`,
                                                      class: "ml-3 min-w-0 flex-1 text-gray-500"
                                                    }, toDisplayString(option.label), 9, ["for"])
                                                  ]);
                                                }), 128))
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["onClose"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"${_scopeId}><h1 class="text-4xl font-bold tracking-tight text-gray-900"${_scopeId}>Imóveis</h1><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Menu), {
              as: "div",
              class: "relative inline-block text-left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MenuButton), { class: "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sort `);
                        _push4(ssrRenderComponent(unref(ChevronDownIcon), {
                          class: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Sort "),
                          createVNode(unref(ChevronDownIcon), {
                            class: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500",
                            "aria-hidden": "true"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(MenuItems), { class: "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="py-1"${_scopeId3}><!--[-->`);
                        ssrRenderList(sortOptions, (option) => {
                          _push4(ssrRenderComponent(unref(MenuItem), {
                            key: option.name
                          }, {
                            default: withCtx(({ active }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<a${ssrRenderAttr("href", option.href)} class="${ssrRenderClass([option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm"])}"${_scopeId4}>${ssrInterpolate(option.name)}</a>`);
                              } else {
                                return [
                                  createVNode("a", {
                                    href: option.href,
                                    class: [option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm"]
                                  }, toDisplayString(option.name), 11, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "py-1" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(sortOptions, (option) => {
                              return createVNode(unref(MenuItem), {
                                key: option.name
                              }, {
                                default: withCtx(({ active }) => [
                                  createVNode("a", {
                                    href: option.href,
                                    class: [option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm"]
                                  }, toDisplayString(option.name), 11, ["href"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(unref(MenuButton), { class: "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" }, {
                        default: withCtx(() => [
                          createTextVNode(" Sort "),
                          createVNode(unref(ChevronDownIcon), {
                            class: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500",
                            "aria-hidden": "true"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(Transition, {
                      "enter-active-class": "transition ease-out duration-100",
                      "enter-from-class": "transform opacity-0 scale-95",
                      "enter-to-class": "transform opacity-100 scale-100",
                      "leave-active-class": "transition ease-in duration-75",
                      "leave-from-class": "transform opacity-100 scale-100",
                      "leave-to-class": "transform opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(MenuItems), { class: "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "py-1" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(sortOptions, (option) => {
                                return createVNode(unref(MenuItem), {
                                  key: option.name
                                }, {
                                  default: withCtx(({ active }) => [
                                    createVNode("a", {
                                      href: option.href,
                                      class: [option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm"]
                                    }, toDisplayString(option.name), 11, ["href"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"${_scopeId}><span class="sr-only"${_scopeId}>View grid</span>`);
            _push2(ssrRenderComponent(unref(Squares2X2Icon), {
              class: "h-5 w-5",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</button><button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"${_scopeId}><span class="sr-only"${_scopeId}>Filters</span>`);
            _push2(ssrRenderComponent(unref(FunnelIcon), {
              class: "h-5 w-5",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div><section aria-labelledby="products-heading" class="pb-24 pt-6"${_scopeId}><h2 id="products-heading" class="sr-only"${_scopeId}>Products</h2><div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"${_scopeId}><form class="hidden lg:block"${_scopeId}><h3 class="sr-only"${_scopeId}>Prices</h3><div class="flex items-center justify-between space-x-3"${_scopeId}><div class="basis-1/3"${_scopeId}><label for="filters-price-from" class="mb-2 block text-sm font-medium text-gray-900"${_scopeId}> From </label><input type="number" id="filters-price-from" placeholder="Min price"${ssrRenderAttr("value", unref(filterPrices).prices[0])} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"${_scopeId}></div><div class="basis-1/3"${_scopeId}><label for="filters-price-to" class="mb-2 block text-sm font-medium text-gray-900"${_scopeId}> To </label><input type="number" id="filters-price-to"${ssrRenderAttr("value", unref(filterPrices).prices[1])} placeholder="Max price" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$f, {
              class: "self-end",
              onClick: ($event) => priceFilter()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ok `);
                } else {
                  return [
                    createTextVNode(" Ok ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(Disclosure), {
              as: "div",
              class: "border-b border-gray-200 py-6"
            }, {
              default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="-my-3 flow-root"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="font-medium text-gray-900"${_scopeId3}>Brands</span><span class="ml-6 flex items-center"${_scopeId3}>`);
                        if (!open) {
                          _push4(ssrRenderComponent(unref(PlusIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(MinusIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "font-medium text-gray-900" }, "Brands"),
                          createVNode("span", { class: "ml-6 flex items-center" }, [
                            !open ? (openBlock(), createBlock(unref(PlusIcon), {
                              key: 0,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })) : (openBlock(), createBlock(unref(MinusIcon), {
                              key: 1,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</h3>`);
                  _push3(ssrRenderComponent(unref(DisclosurePanel), { class: "pt-6" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.brands, (brand) => {
                          _push4(`<div class="flex items-center"${_scopeId3}><input${ssrRenderAttr("id", `filter-${brand.id}`)}${ssrRenderAttr("value", brand.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedBrands.value) ? ssrLooseContain(selectedBrands.value, brand.id) : selectedBrands.value) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"${_scopeId3}><label${ssrRenderAttr("for", `filter-${brand.id}`)} class="ml-3 text-sm text-gray-600"${_scopeId3}>${ssrInterpolate(brand.name)}</label></div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand) => {
                              return openBlock(), createBlock("div", {
                                key: brand.id,
                                class: "flex items-center"
                              }, [
                                withDirectives(createVNode("input", {
                                  id: `filter-${brand.id}`,
                                  value: brand.id,
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => selectedBrands.value = $event,
                                  class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                  [vModelCheckbox, selectedBrands.value]
                                ]),
                                createVNode("label", {
                                  for: `filter-${brand.id}`,
                                  class: "ml-3 text-sm text-gray-600"
                                }, toDisplayString(brand.name), 9, ["for"])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h3", { class: "-my-3 flow-root" }, [
                      createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-medium text-gray-900" }, "Brands"),
                          createVNode("span", { class: "ml-6 flex items-center" }, [
                            !open ? (openBlock(), createBlock(unref(PlusIcon), {
                              key: 0,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })) : (openBlock(), createBlock(unref(MinusIcon), {
                              key: 1,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand) => {
                            return openBlock(), createBlock("div", {
                              key: brand.id,
                              class: "flex items-center"
                            }, [
                              withDirectives(createVNode("input", {
                                id: `filter-${brand.id}`,
                                value: brand.id,
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => selectedBrands.value = $event,
                                class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                [vModelCheckbox, selectedBrands.value]
                              ]),
                              createVNode("label", {
                                for: `filter-${brand.id}`,
                                class: "ml-3 text-sm text-gray-600"
                              }, toDisplayString(brand.name), 9, ["for"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Disclosure), {
              as: "div",
              class: "border-b border-gray-200 py-6"
            }, {
              default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="-my-3 flow-root"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="font-medium text-gray-900"${_scopeId3}>Categories</span><span class="ml-6 flex items-center"${_scopeId3}>`);
                        if (!open) {
                          _push4(ssrRenderComponent(unref(PlusIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(MinusIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                          createVNode("span", { class: "ml-6 flex items-center" }, [
                            !open ? (openBlock(), createBlock(unref(PlusIcon), {
                              key: 0,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })) : (openBlock(), createBlock(unref(MinusIcon), {
                              key: 1,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</h3>`);
                  _push3(ssrRenderComponent(unref(DisclosurePanel), { class: "pt-6" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.categories, (category) => {
                          _push4(`<div class="flex items-center"${_scopeId3}><input${ssrRenderAttr("id", `filter-${category.id}`)}${ssrRenderAttr("value", category.id)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedCategories.value) ? ssrLooseContain(selectedCategories.value, category.id) : selectedCategories.value) ? " checked" : ""} class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"${_scopeId3}><label${ssrRenderAttr("for", `filter-${category.id}`)} class="ml-3 text-sm text-gray-600"${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("div", {
                                key: category.id,
                                class: "flex items-center"
                              }, [
                                withDirectives(createVNode("input", {
                                  id: `filter-${category.id}`,
                                  value: category.id,
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => selectedCategories.value = $event,
                                  class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                  [vModelCheckbox, selectedCategories.value]
                                ]),
                                createVNode("label", {
                                  for: `filter-${category.id}`,
                                  class: "ml-3 text-sm text-gray-600"
                                }, toDisplayString(category.name), 9, ["for"])
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h3", { class: "-my-3 flow-root" }, [
                      createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                          createVNode("span", { class: "ml-6 flex items-center" }, [
                            !open ? (openBlock(), createBlock(unref(PlusIcon), {
                              key: 0,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })) : (openBlock(), createBlock(unref(MinusIcon), {
                              key: 1,
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            }))
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.id,
                              class: "flex items-center"
                            }, [
                              withDirectives(createVNode("input", {
                                id: `filter-${category.id}`,
                                value: category.id,
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => selectedCategories.value = $event,
                                class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                [vModelCheckbox, selectedCategories.value]
                              ]),
                              createVNode("label", {
                                for: `filter-${category.id}`,
                                class: "ml-3 text-sm text-gray-600"
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form><div class="lg:col-span-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              products: __props.products.data
            }, null, _parent2, _scopeId));
            _push2(`</div></div></section></main></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white" }, [
                createVNode("div", null, [
                  createVNode(unref(TransitionRoot), {
                    as: "template",
                    show: mobileFiltersOpen.value
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Dialog), {
                        as: "div",
                        class: "relative z-40 lg:hidden",
                        onClose: ($event) => mobileFiltersOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "transition-opacity ease-linear duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "transition-opacity ease-linear duration-300",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "fixed inset-0 bg-black bg-opacity-25" })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "fixed inset-0 z-40 flex" }, [
                            createVNode(unref(TransitionChild), {
                              as: "template",
                              enter: "transition ease-in-out duration-300 transform",
                              "enter-from": "translate-x-full",
                              "enter-to": "translate-x-0",
                              leave: "transition ease-in-out duration-300 transform",
                              "leave-from": "translate-x-0",
                              "leave-to": "translate-x-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(DialogPanel), { class: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Filters"),
                                      createVNode("button", {
                                        type: "button",
                                        class: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                                        onClick: ($event) => mobileFiltersOpen.value = false
                                      }, [
                                        createVNode("span", { class: "sr-only" }, "Close menu"),
                                        createVNode(unref(XMarkIcon), {
                                          class: "h-6 w-6",
                                          "aria-hidden": "true"
                                        })
                                      ], 8, ["onClick"])
                                    ]),
                                    createVNode("form", { class: "mt-4 border-t border-gray-200" }, [
                                      createVNode("h3", { class: "sr-only" }, "Categories"),
                                      createVNode("ul", {
                                        role: "list",
                                        class: "px-2 py-3 font-medium text-gray-900"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.subCategories, (category) => {
                                          return openBlock(), createBlock("li", {
                                            key: category.name
                                          }, [
                                            createVNode("a", {
                                              href: category.href,
                                              class: "block px-2 py-3"
                                            }, toDisplayString(category.name), 9, ["href"])
                                          ]);
                                        }), 128))
                                      ]),
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filters, (section) => {
                                        return openBlock(), createBlock(unref(Disclosure), {
                                          as: "div",
                                          key: section.id,
                                          class: "border-t border-gray-200 px-4 py-6"
                                        }, {
                                          default: withCtx(({ open }) => [
                                            createVNode("h3", { class: "-mx-2 -my-3 flow-root" }, [
                                              createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "font-medium text-gray-900" }, toDisplayString(section.name), 1),
                                                  createVNode("span", { class: "ml-6 flex items-center" }, [
                                                    !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                                      key: 0,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    })) : (openBlock(), createBlock(unref(MinusIcon), {
                                                      key: 1,
                                                      class: "h-5 w-5",
                                                      "aria-hidden": "true"
                                                    }))
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "space-y-6" }, [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(section.options, (option, optionIdx) => {
                                                    return openBlock(), createBlock("div", {
                                                      key: option.value,
                                                      class: "flex items-center"
                                                    }, [
                                                      createVNode("input", {
                                                        id: `filter-mobile-${section.id}-${optionIdx}`,
                                                        name: `${section.id}[]`,
                                                        value: option.value,
                                                        type: "checkbox",
                                                        checked: option.checked,
                                                        class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                      }, null, 8, ["id", "name", "value", "checked"]),
                                                      createVNode("label", {
                                                        for: `filter-mobile-${section.id}-${optionIdx}`,
                                                        class: "ml-3 min-w-0 flex-1 text-gray-500"
                                                      }, toDisplayString(option.label), 9, ["for"])
                                                    ]);
                                                  }), 128))
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onClose"])
                    ]),
                    _: 1
                  }, 8, ["show"]),
                  createVNode("main", { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, [
                    createVNode("div", { class: "flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24" }, [
                      createVNode("h1", { class: "text-4xl font-bold tracking-tight text-gray-900" }, "Imóveis"),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(unref(Menu), {
                          as: "div",
                          class: "relative inline-block text-left"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(unref(MenuButton), { class: "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Sort "),
                                  createVNode(unref(ChevronDownIcon), {
                                    class: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500",
                                    "aria-hidden": "true"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(Transition, {
                              "enter-active-class": "transition ease-out duration-100",
                              "enter-from-class": "transform opacity-0 scale-95",
                              "enter-to-class": "transform opacity-100 scale-100",
                              "leave-active-class": "transition ease-in duration-75",
                              "leave-from-class": "transform opacity-100 scale-100",
                              "leave-to-class": "transform opacity-0 scale-95"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(MenuItems), { class: "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "py-1" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(sortOptions, (option) => {
                                        return createVNode(unref(MenuItem), {
                                          key: option.name
                                        }, {
                                          default: withCtx(({ active }) => [
                                            createVNode("a", {
                                              href: option.href,
                                              class: [option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm"]
                                            }, toDisplayString(option.name), 11, ["href"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 64))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("button", {
                          type: "button",
                          class: "-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                        }, [
                          createVNode("span", { class: "sr-only" }, "View grid"),
                          createVNode(unref(Squares2X2Icon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          })
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden",
                          onClick: ($event) => mobileFiltersOpen.value = true
                        }, [
                          createVNode("span", { class: "sr-only" }, "Filters"),
                          createVNode(unref(FunnelIcon), {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          })
                        ], 8, ["onClick"])
                      ])
                    ]),
                    createVNode("section", {
                      "aria-labelledby": "products-heading",
                      class: "pb-24 pt-6"
                    }, [
                      createVNode("h2", {
                        id: "products-heading",
                        class: "sr-only"
                      }, "Products"),
                      createVNode("div", { class: "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4" }, [
                        createVNode("form", { class: "hidden lg:block" }, [
                          createVNode("h3", { class: "sr-only" }, "Prices"),
                          createVNode("div", { class: "flex items-center justify-between space-x-3" }, [
                            createVNode("div", { class: "basis-1/3" }, [
                              createVNode("label", {
                                for: "filters-price-from",
                                class: "mb-2 block text-sm font-medium text-gray-900"
                              }, " From "),
                              withDirectives(createVNode("input", {
                                type: "number",
                                id: "filters-price-from",
                                placeholder: "Min price",
                                "onUpdate:modelValue": ($event) => unref(filterPrices).prices[0] = $event,
                                class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(filterPrices).prices[0]]
                              ])
                            ]),
                            createVNode("div", { class: "basis-1/3" }, [
                              createVNode("label", {
                                for: "filters-price-to",
                                class: "mb-2 block text-sm font-medium text-gray-900"
                              }, " To "),
                              withDirectives(createVNode("input", {
                                type: "number",
                                id: "filters-price-to",
                                "onUpdate:modelValue": ($event) => unref(filterPrices).prices[1] = $event,
                                placeholder: "Max price",
                                class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(filterPrices).prices[1]]
                              ])
                            ]),
                            createVNode(_sfc_main$f, {
                              class: "self-end",
                              onClick: ($event) => priceFilter()
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Ok ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          createVNode(unref(Disclosure), {
                            as: "div",
                            class: "border-b border-gray-200 py-6"
                          }, {
                            default: withCtx(({ open }) => [
                              createVNode("h3", { class: "-my-3 flow-root" }, [
                                createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "font-medium text-gray-900" }, "Brands"),
                                    createVNode("span", { class: "ml-6 flex items-center" }, [
                                      !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                        key: 0,
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      })) : (openBlock(), createBlock(unref(MinusIcon), {
                                        key: 1,
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      }))
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-4" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.brands, (brand) => {
                                      return openBlock(), createBlock("div", {
                                        key: brand.id,
                                        class: "flex items-center"
                                      }, [
                                        withDirectives(createVNode("input", {
                                          id: `filter-${brand.id}`,
                                          value: brand.id,
                                          type: "checkbox",
                                          "onUpdate:modelValue": ($event) => selectedBrands.value = $event,
                                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                          [vModelCheckbox, selectedBrands.value]
                                        ]),
                                        createVNode("label", {
                                          for: `filter-${brand.id}`,
                                          class: "ml-3 text-sm text-gray-600"
                                        }, toDisplayString(brand.name), 9, ["for"])
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Disclosure), {
                            as: "div",
                            class: "border-b border-gray-200 py-6"
                          }, {
                            default: withCtx(({ open }) => [
                              createVNode("h3", { class: "-my-3 flow-root" }, [
                                createVNode(unref(DisclosureButton), { class: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "font-medium text-gray-900" }, "Categories"),
                                    createVNode("span", { class: "ml-6 flex items-center" }, [
                                      !open ? (openBlock(), createBlock(unref(PlusIcon), {
                                        key: 0,
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      })) : (openBlock(), createBlock(unref(MinusIcon), {
                                        key: 1,
                                        class: "h-5 w-5",
                                        "aria-hidden": "true"
                                      }))
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode(unref(DisclosurePanel), { class: "pt-6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "space-y-4" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                      return openBlock(), createBlock("div", {
                                        key: category.id,
                                        class: "flex items-center"
                                      }, [
                                        withDirectives(createVNode("input", {
                                          id: `filter-${category.id}`,
                                          value: category.id,
                                          type: "checkbox",
                                          "onUpdate:modelValue": ($event) => selectedCategories.value = $event,
                                          class: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        }, null, 8, ["id", "value", "onUpdate:modelValue"]), [
                                          [vModelCheckbox, selectedCategories.value]
                                        ]),
                                        createVNode("label", {
                                          for: `filter-${category.id}`,
                                          class: "ml-3 text-sm text-gray-600"
                                        }, toDisplayString(category.name), 9, ["for"])
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "lg:col-span-3" }, [
                          createVNode(_sfc_main$5, {
                            products: __props.products.data
                          }, null, 8, ["products"])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/ProductList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50"><img id="background" class="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg"><div class="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"><div class="relative w-full max-w-2xl px-6 lg:max-w-7xl"><header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"><div class="flex lg:col-start-2 lg:justify-center"><svg class="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="currentColor"></path></svg></div>`);
      if (__props.canLogin) {
        _push(`<nav class="-mx-3 flex flex-1 justify-end">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard `);
              } else {
                return [
                  createTextVNode(" Dashboard ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in `);
              } else {
                return [
                  createTextVNode(" Log in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main class="mt-6"><div class="grid gap-6 lg:grid-cols-2 lg:gap-8"><a href="https://laravel.com/docs" id="docs-card" class="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div id="screenshot-container" class="relative flex w-full flex-1 items-stretch"><img src="https://laravel.com/assets/img/welcome/docs-light.svg" alt="Laravel documentation screenshot" class="aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"><img src="https://laravel.com/assets/img/welcome/docs-dark.svg" alt="Laravel documentation screenshot" class="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"><div class="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div></div><div class="relative flex items-center gap-6 lg:items-end"><div id="docs-card-content" class="flex items-start gap-6 lg:flex-col"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#FF2D20" d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"></path><path fill="#FF2D20" d="m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"></path></svg></div><div class="pt-3 sm:pt-5 lg:pt-0"><h2 class="text-xl font-semibold text-black dark:text-white"> Documentation </h2><p class="mt-4 text-sm/relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div></div><svg class="size-6 shrink-0 stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></div></a><a href="https://laracasts.com" class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Laracasts </h2><p class="mt-4 text-sm/relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z"></path><path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z"></path><path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Laravel News </h2><p class="mt-4 text-sm/relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg class="size-6 shrink-0 self-center stroke-[#FF2D20]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800"><div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16"><svg class="size-5 sm:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="#FF2D20"><path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z"></path></g></svg></div><div class="pt-3 sm:pt-5"><h2 class="text-xl font-semibold text-black dark:text-white"> Vibrant Ecosystem </h2><p class="mt-4 text-sm/relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]">Forge</a>, <a href="https://vapor.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Vapor</a>, <a href="https://nova.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Nova</a>, <a href="https://envoyer.io" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Envoyer</a>, and <a href="https://herd.laravel.com" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Herd</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Echo</a>, <a href="https://laravel.com/docs/horizon" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white">Telescope</a>, and more. </p></div></div></div></main><footer class="py-16 text-center text-sm text-black dark:text-white/70"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </footer></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k2 = S2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/Auth/Login.vue": __vite_glob_0_0, "./Pages/Admin/Components/AdminLayout.vue": __vite_glob_0_1, "./Pages/Admin/Components/Navbar.vue": __vite_glob_0_2, "./Pages/Admin/Components/Sidebar.vue": __vite_glob_0_3, "./Pages/Admin/Dashboard.vue": __vite_glob_0_4, "./Pages/Admin/Product/Index.vue": __vite_glob_0_5, "./Pages/Admin/Product/ProductList.vue": __vite_glob_0_6, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_7, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_8, "./Pages/Auth/Login.vue": __vite_glob_0_9, "./Pages/Auth/Register.vue": __vite_glob_0_10, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_11, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_12, "./Pages/Dashboard.vue": __vite_glob_0_13, "./Pages/Profile/Edit.vue": __vite_glob_0_14, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_15, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_16, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_17, "./Pages/User/CartList.vue": __vite_glob_0_18, "./Pages/User/Components/Products.vue": __vite_glob_0_19, "./Pages/User/Dashboard.vue": __vite_glob_0_20, "./Pages/User/Index.vue": __vite_glob_0_21, "./Pages/User/Layouts/Footer.vue": __vite_glob_0_22, "./Pages/User/Layouts/Header.vue": __vite_glob_0_23, "./Pages/User/Layouts/Hero.vue": __vite_glob_0_24, "./Pages/User/Layouts/UserLayouts.vue": __vite_glob_0_25, "./Pages/User/ProductDetail.vue": __vite_glob_0_26, "./Pages/User/ProductList.vue": __vite_glob_0_27, "./Pages/Welcome.vue": __vite_glob_0_28 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(k).use(plugin);
    }
  })
);

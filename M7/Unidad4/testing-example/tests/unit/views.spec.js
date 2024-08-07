import { mount } from "@vue/test-utils";
// import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";

describe("Test de vista About", () => {
  it("Match de snapshot con AboutView.vue", () => {
    /* Seleccionar el componente que será puesto a prueba */
    const wrapper = mount(AboutView);
    /* Assertion => Aserción */
    expect(wrapper.html()).toMatchSnapshot();
  });
});


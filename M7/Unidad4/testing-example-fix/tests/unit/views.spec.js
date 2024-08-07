import { mount } from "@vue/test-utils";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import { sumarNumeroPor10 } from "@/functions/functions";
import { createRouter, createWebHistory } from "vue-router";

describe("Tests de vista About", () => {
  it("Test1 - Matchea el snapshot de la vista About Correctamente", () => {
    /* Seleccionar el componente que será puesto a prueba */
    const wrapper = mount(AboutView);
    /* Assertion => Aserción */
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/about",
        name: "about",
        component: () => AboutView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/about");
    await router.isReady();

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

describe("Tests de vista Contact", () => {
  it("Test1 - Matchea el snapshot de la vista Contact Correctamente", () => {
    /* Seleccionar el componente que será puesto a prueba */
    const wrapper = mount(ContactView);
    /* Assertion => Aserción */
    expect(wrapper.html()).toMatchSnapshot();
  });

});

xdescribe("Test de constante de número", () => {
  const numero = 5;

  it("Numero no puede ser menor a 5", () => {
    expect(numero < 5).toBe(false);
  });

  it("Numero no puede ser mayor a 5", () => {
    expect(numero > 5).toBe(false);
  });

  it("Numero es igual a 5", () => {
    expect(numero === 5).toBe(true);
  });

  it("Numero es impar", () => {
    expect(numero % 2 !== 0).toBe(true);
  });

  it("Numero + 10  da como resultado 15", () => {
    const resultado = numero + 10;
    expect(resultado).toEqual(15);
  });
});

xdescribe("Test de funcion sumarPor10", () => {
  it("suma correctamente el número por 10", () => {
    const numero = 78;

    expect(sumarNumeroPor10(numero)).toEqual(numero + 10);
  });
});

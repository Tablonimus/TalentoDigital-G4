import { shallowMount } from "@vue/test-utils";
import NavbarComponent from "@/components/NavbarComponent.vue";

describe("NavbarComponent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(NavbarComponent, {
      props: { title, logo },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

import { shallowMount } from "@vue/test-utils";
import Upload from "@/components/Upload.vue";

describe("Upload.vue", () => {
  it("renders error", async () => {
    const file = new File(["foo"], "foo.txt", { type: "text/plain" });
    const fileEvent = { target: { files: [file] } };
    const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallowMount(Upload);

    await wrapper.vm.upload(fileEvent);

    expect(apiSpy).toBeCalledWith("There are errors: File must be xml type");
    spy.mockRestore()
  });
});

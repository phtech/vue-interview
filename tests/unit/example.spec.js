import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { incomingMsg: msg }
    })
    expect(wrapper.vm.msg).toMatch(msg)
    expect(wrapper.text()).toMatch(msg)
  })
})

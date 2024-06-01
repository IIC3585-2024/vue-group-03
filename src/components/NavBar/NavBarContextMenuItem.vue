<script>
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBarContextMenuItem',
  components: {
    HoverCardArrow,
    HoverCardContent,
    HoverCardPortal,
    HoverCardRoot,
    HoverCardTrigger,
    RouterLink
  }, 
  props: {
    icon: {
      type: String,
      default: 'home'
    }, 
    title: {
      type: String,
      default: 'OutdoorLife'
    },
    options: {
      type: Array,
      default: () => []
    },
    path: {
      type: String,
      default: '/'
    }
  }
}

</script>

<template>
  <HoverCardRoot v-model:open="hoverState">
    <HoverCardTrigger
      class="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
      :href="path"
    >
    <div class="flex items-center border p-2 rounded-xl shadow-md gap-2">
      <span class="font-bold"> {{ title }} </span>
      <v-icon class="text-2xl" :name="icon"/>
      <v-icon class="text-2xl" name="bi-caret-down-fill"/>
    </div>

    </HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent
        class="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        :side-offset="5"
      >
      <div class="flex justify-around gap-4">
        <v-icon class="text-slate-900 w-1/2 h-full" :name="icon" />
          <ul class="grid grid-cols-2 gap-10 text-slate-900">
            <li v-for="option in options" :key="option.id">
              <RouterLink :to="option.path">
                <div class="flex flex-col items-center">
                  <span class="font-bold text-md">{{ option.title }}</span>
                  <span class="text-xs" > {{ option.shortTitle }} </span>
                </div>
              </RouterLink>
            </li>
          </ul>
      </div>

        <HoverCardArrow class="fill-white" :width="8" />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>
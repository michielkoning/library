<script setup lang="ts">
import SummaryDetails from "@/components/SummaryDetails.vue";
import CenterWrapper from "@/components/CenterWrapper.vue";
import AppNotification from "@/components/AppNotification.vue";
import AppTabs from "@/components/AppTabs.vue";
import AppDialog from "@/components/AppDialog.vue";
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
import AppPopover from "@/components/AppPopover.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <center-wrapper>
    <app-popover>
      <template #anchor><icon icon="solar:info-circle-bold" /></template>
      Greetings, one and all!
    </app-popover>
    <app-breadcrumb
      :pages="[
        {
          title: 'home',
          to: '/',
        },

        {
          title: 'about',
          to: '/',
        },
      ]"
    />
    <app-dialog id="dialog" title="test">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos, libero iste asperiores
        quisquam inventore? Hic quaerat id recusandae, esse cumque omnis officia, debitis amet
        obcaecati suscipit exercitationem nisi? Possimus!
      </p>
    </app-dialog>
    <button commandfor="dialog" command="show-modal">Open Dialog</button>
    <summary-details title="Hic eos, libero iste asperiores" style="margin-bottom: 1em;">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos, libero iste asperiores
      quisquam inventore? Hic quaerat id recusandae, esse cumque omnis officia, debitis amet
      obcaecati suscipit exercitationem nisi? Possimus!
    </summary-details>
    <app-notification title="test" variant="danger" />
    <app-notification
      title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos, libero iste asperiores quisquam inventore? Hic quaerat id recusandae, esse cumque omnis officia, debitis amet obcaecati suscipit exercitationem nisi? Possimus!"
      variant="success"
    />
    <app-notification title="test" variant="warning" />
    <app-notification title="test" variant="info" />
    <app-tabs
      :tabs="[
        {
          id: 'apple',
          title: 'Apple',
        },
        {
          id: 'apricot',
          title: 'Apricot',
        },
        {
          id: 'advocado',
          title: 'Avocado',
        },
      ]"
    >
      <template #advocado>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptatum vitae fugiat
          dolor amet rem ab tempore aspernatur, dolore nostrum laboriosam ratione sequi quidem autem
          libero. Molestias placeat omnis explicabo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores veniam sint quidem, ut corporis fuga impedit, obcaecati
          neque, dolor earum unde maiores nesciunt atque. Atque adipisci nemo temporibus optio est!
        </p>
      </template>
      <template #apple>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, accusantium ullam quo
          dolores id voluptatem dignissimos, quas rem, dolore excepturi eius? Voluptatem libero quis
          sit! Beatae libero adipisci eius praesentium. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Vel facilis tempore cum modi quam dolorum eaque expedita, doloremque
          delectus? Odio sint iste nam nobis laboriosam illo blanditiis voluptatibus alias autem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus autem, esse
          asperiores consectetur illum? Perferendis numquam, dicta cupiditate dolorem, rem aliquid
          culpa perspiciatis alias quam laborum hic. Exercitationem, placeat.
        </p>
      </template>
      <template #apricot>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, eum sequi assumenda
          laudantium excepturi earum enim repudiandae, esse nobis temporibus numquam ut commodi.
          Recusandae perferendis temporibus dicta deleniti blanditiis aliquid?
        </p>
      </template>
    </app-tabs>       <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, eum sequi assumenda
      laudantium excepturi earum enim repudiandae, esse nobis temporibus numquam ut commodi.
      Recusandae perferendis temporibus dicta deleniti blanditiis aliquid?
    </p>       <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, eum sequi assumenda
      laudantium excepturi earum enim repudiandae, esse nobis temporibus numquam ut commodi.
      Recusandae perferendis temporibus dicta deleniti blanditiis aliquid?
    </p>       <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, eum sequi assumenda
      laudantium excepturi earum enim repudiandae, esse nobis temporibus numquam ut commodi.
      Recusandae perferendis temporibus dicta deleniti blanditiis aliquid?
    </p>       <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, eum sequi assumenda
      laudantium excepturi earum enim repudiandae, esse nobis temporibus numquam ut commodi.
      Recusandae perferendis temporibus dicta deleniti blanditiis aliquid?
    </p>
  </center-wrapper>
</template>

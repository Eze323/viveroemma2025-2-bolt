<template>
  <div>
    <!-- Hero section -->
    <section class="bg-primary/5 py-12">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p class="text-xl text-gray-600 max-w-2xl">
          Estamos aquí para ayudarte. Contáctanos por cualquier consulta o sugerencia.
        </p>
      </div>
    </section>

    <!-- Contact section -->
    <section class="py-12">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact form -->
          <div class="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
      <p class="text-gray-600 mb-6">El formulario estará disponible pronto. Mientras tanto, contáctanos por WhatsApp o teléfono.</p>
      <form class="space-y-6" disabled>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input type="text" class="input w-full" disabled />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" class="input w-full" disabled />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
          <input type="text" class="input w-full" disabled />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
          <textarea rows="6" class="input w-full" disabled></textarea>
        </div>
        <button type="button" class="btn btn-primary w-full" disabled>
          Formulario en construcción
        </button>
      </form>
            
          </div>
          
          <!-- Contact info -->
          <div>
            <div class="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Información de contacto</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div class="ml-4">
                    <h4 class="font-bold text-gray-900">Dirección</h4>
                    <p class="text-gray-600">Cnel. Emeterio de Escalada 10565, B1744 Cuartel V, Provincia de Buenos Aires</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <Icon name="heroicons:phone" class="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div class="ml-4">
                    <h4 class="font-bold text-gray-900">Teléfono</h4>
                    <p class="text-gray-600">(+54) 11-5116-5807</p>
                    <p class="text-gray-600">(+54) 11-5181-6570</p>
                    <p class="text-gray-600">
                   <a href="https://api.whatsapp.com/send?phone=51165807&text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n">
                     <button>Chatea con nosotros en WhatsApp</button>
                    </a>
                  </p>
                  </div>
                </div>
                
                <!-- <div class="flex items-start">
                  <Icon name="heroicons:envelope" class="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div class="ml-4">
                    <h4 class="font-bold text-gray-900">Email</h4>
                    <p class="text-gray-600">info@viveroemma.com</p>
                  </div>
                </div> -->
                
                <div class="flex items-start">
                  <Icon name="heroicons:clock" class="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div class="ml-4">
                    <h4 class="font-bold text-gray-900">Horarios</h4>
                    <p class="text-gray-600">Lunes a Sábado: 7:20 - 18:00</p>
                    <p class="text-gray-600">Domingos: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Síguenos en redes sociales</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-primary transition-colors">
                  <Icon name="mdi:facebook" class="w-8 h-8" />
                </a>
                <a href="#" class="text-gray-600 hover:text-primary transition-colors">
                  <Icon name="mdi:instagram" class="w-8 h-8" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=51165807&text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n" class="text-gray-600 hover:text-primary transition-colors">
                  <Icon name="mdi:whatsapp" class="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map section -->
    <section class="py-12 bg-gray-50">
      <div class="container-custom">
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="aspect-w-16 aspect-h-9">
            <!-- Replace with actual Google Maps embed -->
            <div class="w-full h-full bg-gray-200 flex items-center justify-center">
              <p class="text-gray-600">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Form submission handler
const handleSubmit = () => {
  // Here you would typically make an API call to handle the form submission
  console.log('Form submitted:', form);
  
  // Reset form
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};
</script>
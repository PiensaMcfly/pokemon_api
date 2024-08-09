import React from 'react'

const Footer = () => {

    return (
       <div>
        <div className='divider'></div>
       <footer class="bg-gradient-to-r from-green-600 to-black text-white"> <div class="container mx-auto py-4">
        <div class="flex justify-between items-center">
          <p class="text-sm">Copyright © 2024 . Todos los derechos reservados.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-blue-300">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-white hover:text-blue-300">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
       
    )
}
export default Footer
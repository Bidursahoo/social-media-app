import React from "react";

export default function Footer() {
  return (
    <>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">Home</p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">Features</p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">Pricing</p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">FAQs</p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-2 text-muted">About</p>
            </li>
          </ul>
          <p class="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}

<script>
export default {}
</script>
<template>
    <div class="col-lg-3 col-md-6 mb-4">
        <h2 class="h5 mb-1">{{ $t("home.sponsors") }}</h2>
        <p class="text-secondary small mb-3">{{ $t("home.sponsors_message") }}</p>
        <div class="d-flex flex-wrap gap-4 justify-content-center align-items-center">
            <a href="https://fapitec.se.gov.br/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/sponsors/fapitec_se.png" alt="FAPITEC/SE" class="img-fluid rounded-3" style="max-height: 80px;">
                <div class="small text-dark mt-1">FAPITEC/SE</div>
            </a>
            <a href="https://www.cgi.br/" target="_blank" class="text-center text-decoration-none">
                <img src="/assets/img/sponsors/nic_cgi_vetor_cor_sem_texto.png" alt="NIC.br / CGI.br" class="img-fluid rounded-3" style="max-height: 80px;">
                <div class="small text-dark mt-1">NIC.br / CGI.br</div>
            </a>
        </div>
    </div>
</template>

function alertSupport() {
      Swal.fire({
            title: "Sukses !",
            text: "Thanks For Support",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
      }).then((result) => {
            window.open("https://youtube.com/@ahmadadptr", "_blank");
      });
}

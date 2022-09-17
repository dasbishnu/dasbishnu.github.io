---
layout: post
title:  "SHA-256 Online Generator"
date:   2022-09-17 22:14:36 +0530
categories: tools
featured: true
image: assets/images/sha-256.jpg
permalink: /sha-256-online-generator
---
*[Image by rawpixel.com](https://www.freepik.com/free-vector/cyber-security-concept_4239575.htm#query=cryptography&position=24&from_view=search) on Freepik*

SHA-256 stands for Secure Hash Algorithm 256-bit and it’s used for generating a cryptographic hash.

>If you’re not familiar with SHA-256, try out the online generator below. Just enter any message and click the "Convert to SHA-256"
button.

<script>
 /*  function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
      return hashHex;
    });
  } */
  async function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}
  function hash_email() {
    var user_email = $("#email").val();
    hash(user_email).then((hex) => {
      $("#sha256_email").val(hex);
      copy_to_clipboard();
    });
  }
  function copy_to_clipboard() {
    var copyText = document.getElementById("sha256_email");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }
</script>
<form>
  <label>Enter a message to hash</label>
  <div class="row">
    <div class="col-md-8">
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="johndoe@yahoo.com"
        required>
    </div>
    <div class="col-md-2">
      <button type="button" id="convert_sha256" class="btn btn-primary" onclick="hash_email()">Convert to
        SHA-256</button>
    </div>
  </div>
  <label>SHA-256 hash</label>
  <div class="row">
    <div class="col-md-10">
      <input type="text" class="form-control" id="sha256_email" placeholder="SHA256" readonly>
    </div>
  </div>
  <p>Hash added to your clipboard. Simply press ⌘+V, CTRL+V to paste.</p>
  <br>
</form>
<style>

</style>
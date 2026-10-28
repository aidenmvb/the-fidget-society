/* Request delivery. Leave formEndpoint empty until an adult-managed inbox is connected.
   A public page must not contain a secret. Use a form service or a server route
   that keeps the mailbox credential off this file.
   Success is any HTTP 2xx from a POST of JSON. Update privacy.html when this changes. */
(function (root) {
  root.FIDGET_CONFIG = {
    formEndpoint: "",
    formMethod: "POST"
  };
})(window);

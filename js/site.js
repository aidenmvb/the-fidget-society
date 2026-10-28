(function () {
  var catalog = window.FIDGET_CATALOG || [];
  var config = window.FIDGET_CONFIG || { formEndpoint: "" };

  var header = document.querySelector(".site-header");
  var updateHeader = function () {};
  if (header) {
    updateHeader = function () {
      document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
      var hero = document.querySelector(".hero-screen");
      var menuOpen = document.body.classList.contains("nav-open");
      var pastHero = !hero || window.scrollY >= hero.offsetHeight - header.offsetHeight - 1;
      header.classList.toggle(
        "is-solid",
        menuOpen || pastHero || document.body.classList.contains("no-hero")
      );
    };
    updateHeader();
    window.addEventListener("resize", updateHeader);
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var closeNav = function (returnFocus) {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "Menu";
      updateHeader();
      if (returnFocus) toggle.focus();
    };
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) {
        closeNav(false);
        return;
      }
      nav.classList.add("is-open");
      document.body.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.textContent = "Close";
      updateHeader();
      var first = nav.querySelector("a");
      if (first) first.focus();
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeNav(true);
      }
    });
  }

  function findFidget(id) {
    for (var i = 0; i < catalog.length; i += 1) {
      if (catalog[i].id === id) return catalog[i];
    }
    return null;
  }

  function card(item) {
    return (
      '<article class="card">' +
      '<a class="card-media" href="fidget.html#' + item.id + '">' +
      '<img src="' + item.image + '" alt="' + escapeHtml(item.alt) + '" width="' + item.width + '" height="' + item.height + '" loading="lazy" style="--card-x:' + escapeHtml(item.cardFocus || "70% 52%") + '">' +
      "</a>" +
      '<div class="card-body">' +
      '<p class="card-motion">' + escapeHtml(item.motion) + "</p>" +
      "<h3><a href=\"fidget.html#" + item.id + '">' + escapeHtml(item.name) + "</a></h3>" +
      "<p>" + escapeHtml(item.summary) + "</p>" +
      '<a class="text-link" href="fidget.html#' + item.id + '">Details</a>' +
      "</div></article>"
    );
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var grid = document.querySelector("[data-fidget-grid]");
  if (grid) {
    grid.innerHTML = catalog.map(card).join("");
  }

  var detailRoot = document.querySelector("[data-fidget-detail]");
  if (detailRoot) {
    function heroScreen(image, alt, width, height, focus, eyebrow, title, support, actionHref, actionLabel) {
      return (
        '<section class="hero-screen" id="design-hero" style="--hero-x:' +
        focus +
        ";--hero-y:50%;--hero-x-phone:82%;--hero-y-phone:46%\">" +
        '<img class="hero-media" src="' +
        image +
        '" alt="' +
        escapeHtml(alt) +
        '" width="' +
        width +
        '" height="' +
        height +
        '">' +
        '<div class="hero-shade" aria-hidden="true"></div>' +
        '<div class="hero-copy"><div class="wrap">' +
        '<p class="eyebrow">' +
        escapeHtml(eyebrow) +
        "</p>" +
        "<h1>" +
        title +
        "</h1>" +
        '<p class="hero-support">' +
        escapeHtml(support) +
        "</p>" +
        '<a class="btn" href="' +
        actionHref +
        '">' +
        escapeHtml(actionLabel) +
        "</a>" +
        '<p class="hero-credit">AI illustration.</p>' +
        "</div></div></section>"
      );
    }

    var renderDetail = function () {
      var id = (location.hash || "").replace("#", "");
      var item = findFidget(id);
      if (!item) {
        document.title = "The fidgets — The Fidget Society";
        var choices = catalog
          .map(function (entry) {
            return (
              "<li><a href=\"fidget.html#" +
              entry.id +
              '"><strong>' +
              escapeHtml(entry.name) +
              "</strong><span>" +
              escapeHtml(entry.motion) +
              "</span></a></li>"
            );
          })
          .join("");
        detailRoot.innerHTML =
          heroScreen(
            "images/heroes/collection.jpg",
            "AI illustration of six fidgets arranged on an oak table.",
            1280,
            720,
            "72%",
            "The fidgets",
            "Choose a design.",
            "Each link opens one fidget.",
            "fidgets.html#gallery",
            "Meet the fidgets"
          ) +
          '<section class="section"><div class="wrap"><h2>The six designs</h2><ul class="more-list">' +
          choices +
          "</ul></div></section>";
        updateHeader();
        return;
      }
      document.title = item.name + " — The Fidget Society";
      var others = catalog
        .filter(function (entry) {
          return entry.id !== item.id;
        })
        .map(function (entry) {
          return (
            "<li><a href=\"fidget.html#" +
            entry.id +
            '"><strong>' +
            escapeHtml(entry.name) +
            "</strong><span>" +
            escapeHtml(entry.motion) +
            "</span></a></li>"
          );
        })
        .join("");
      var title = escapeHtml(item.name).replace(" ", "<br>");
      detailRoot.innerHTML =
        heroScreen(
          item.hero || item.image,
          item.heroAlt || item.alt,
          item.heroWidth || item.width,
          item.heroHeight || item.height,
          "70%",
          item.motion,
          title,
          item.summary,
          "request.html?design=" + item.id,
          "Request this design"
        ) +
        '<section class="section" id="movement"><div class="wrap"><div class="reading">' +
        "<h2>The movement</h2>" +
        "<p>" +
        escapeHtml(item.movement) +
        "</p>" +
        '<div class="detail-block">' +
        "<h2>Material</h2>" +
        "<p>" +
        escapeHtml(window.FIDGET_MATERIAL_NOTE || "") +
        "</p>" +
        '<p class="inline-links"><a class="text-link" href="request.html?design=help">Help me choose</a></p>' +
        "</div></div></div></section>" +
        '<section class="section sand-ground"><div class="wrap"><h2>Other fidgets</h2><ul class="more-list">' +
        others +
        "</ul></div></section>";
      updateHeader();
    };
    renderDetail();
    window.addEventListener("hashchange", function () {
      renderDetail();
      window.scrollTo(0, 0);
    });
  }

  var form = document.getElementById("request-form");
  if (!form) return;

  var designSelect = document.getElementById("design");
  if (designSelect) {
    var current = designSelect.value;
    catalog.forEach(function (item) {
      var option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name + " — " + item.motion.toLowerCase();
      designSelect.appendChild(option);
    });
    var params = new URLSearchParams(location.search);
    var requested = params.get("design") || current;
    if (requested && designSelect.querySelector('option[value="' + requested + '"]')) {
      designSelect.value = requested;
    }
  }

  var colorSelect = document.getElementById("color");
  if (colorSelect && window.FIDGET_COLORS) {
    window.FIDGET_COLORS.forEach(function (color) {
      var option = document.createElement("option");
      option.value = color.id;
      option.textContent = color.label;
      colorSelect.appendChild(option);
    });
  }

  var banner = document.getElementById("form-banner");
  var endpoint = (config.formEndpoint || "").trim();
  if (banner) {
    banner.hidden = false;
    if (!endpoint) {
      banner.innerHTML =
        "<strong>This form cannot send a request yet.</strong> An adult-managed inbox is not connected. You can read the questions, but nothing you type is stored or delivered. Please don’t add medical details.";
    } else {
      banner.innerHTML =
        "<strong>A request is not a reservation.</strong> The project will follow up about availability. No delivery date is promised. Please don’t include diagnoses, medical records, or a street address.";
    }
  }

  var typeRadios = form.querySelectorAll('input[name="requestType"]');
  var quantityNote = document.getElementById("quantity-note");
  var syncQuantityNote = function () {
    var type = form.querySelector('input[name="requestType"]:checked');
    var org = type && type.value === "organization";
    if (!quantityNote) return;
    quantityNote.required = !!org;
    quantityNote.setAttribute("aria-required", org ? "true" : "false");
  };
  typeRadios.forEach(function (radio) {
    radio.addEventListener("change", syncQuantityNote);
  });
  syncQuantityNote();

  var alertBox = document.getElementById("form-alert");
  var confirmation = document.getElementById("request-confirmation");
  var submitButton = document.getElementById("send-request");
  var started = Date.now();
  var sending = false;

  function setError(id, message) {
    var field = document.getElementById(id);
    var error = document.getElementById(id + "-error");
    if (!field || !error) return;
    if (message) {
      field.setAttribute("aria-invalid", "true");
      error.hidden = false;
      error.textContent = message;
    } else {
      field.removeAttribute("aria-invalid");
      error.hidden = true;
      error.textContent = "";
    }
  }

  function showAlert(message) {
    if (!alertBox) return;
    alertBox.hidden = false;
    alertBox.textContent = message;
  }

  function clearAlert() {
    if (!alertBox) return;
    alertBox.hidden = true;
    alertBox.textContent = "";
  }

  var fields = [
    "requester-name",
    "email",
    "relationship",
    "organization",
    "city",
    "state",
    "quantity",
    "quantity-note",
    "design",
    "movement-note",
    "contact-permission"
  ];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (sending) return;
    clearAlert();
    fields.forEach(function (id) {
      setError(id, "");
    });
    var requestTypeError = document.getElementById("request-type-error");
    if (requestTypeError) {
      requestTypeError.hidden = true;
      requestTypeError.textContent = "";
    }

    var data = {
      requesterName: valueOf("requester-name"),
      email: valueOf("email"),
      relationship: valueOf("relationship"),
      organization: valueOf("organization"),
      city: valueOf("city"),
      state: valueOf("state"),
      quantity: valueOf("quantity"),
      quantityNote: valueOf("quantity-note"),
      design: valueOf("design"),
      color: valueOf("color"),
      movementNote: valueOf("movement-note"),
      alreadyHasFidget: (form.querySelector('input[name="alreadyHas"]:checked') || {}).value || "",
      contactPermission: document.getElementById("contact-permission").checked
    };
    var requestType = (form.querySelector('input[name="requestType"]:checked') || {}).value || "";
    var firstInvalid = null;

    function fail(id, message) {
      setError(id, message);
      if (!firstInvalid) firstInvalid = document.getElementById(id);
    }

    if (!data.requesterName) fail("requester-name", "Enter your name.");
    if (!data.email) fail("email", "Enter an email address.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) fail("email", "Enter an email address with a name and a domain.");
    if (!data.relationship) fail("relationship", "Enter your relationship to the recipient, or your role.");
    if (!data.city) fail("city", "Enter a city.");
    if (!data.state || data.state.length < 2) fail("state", "Enter a state, or DC.");
    if (!requestType) {
      if (requestTypeError) {
        requestTypeError.hidden = false;
        requestTypeError.textContent = "Choose an individual request or a care organization.";
      }
      if (!firstInvalid) firstInvalid = document.getElementById("type-individual");
    }
    var quantity = Number(data.quantity);
    if (!data.quantity || !Number.isFinite(quantity) || quantity < 1) {
      fail("quantity", "Enter a quantity of at least 1.");
    }
    if (requestType === "organization" && !data.quantityNote) {
      fail("quantity-note", "Add a short explanation for an organization request.");
    }
    if (!data.design) fail("design", "Choose a design, or choose Help me choose.");
    if (!data.contactPermission) fail("contact-permission", "Permission to contact you is required before a request can be sent.");

    if (firstInvalid || (requestTypeError && !requestTypeError.hidden)) {
      showAlert("Some required answers are missing. Nothing was sent.");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var honeypot = valueOf("company-website");
    if (honeypot) {
      showAlert("The request was not sent.");
      return;
    }

    if (!endpoint) {
      showAlert("The request was not sent. An adult-managed inbox is not connected yet, and nothing was stored.");
      if (alertBox) alertBox.focus();
      return;
    }

    if (Date.now() - started < 2000) {
      showAlert("The request was not sent. Wait a moment and try again.");
      return;
    }

    sending = true;
    submitButton.disabled = true;
    submitButton.textContent = "Sending…";

    var payload = {
      requesterName: data.requesterName,
      email: data.email,
      relationship: data.relationship,
      organization: data.organization,
      city: data.city,
      state: data.state,
      requestType: requestType,
      quantity: quantity,
      quantityNote: data.quantityNote,
      design: data.design,
      color: data.color,
      movementNote: data.movementNote,
      alreadyHasFidget: data.alreadyHasFidget,
      contactPermission: true,
      submittedAt: new Date().toISOString()
    };

    var controller = new AbortController();
    var timer = window.setTimeout(function () {
      controller.abort();
    }, 15000);

    fetch(endpoint, {
      method: config.formMethod || "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    })
      .then(function (response) {
        if (!response.ok) throw new Error("status " + response.status);
        return response;
      })
      .then(function () {
        form.hidden = true;
        if (banner) banner.hidden = true;
        if (confirmation) {
          confirmation.hidden = false;
          confirmation.focus();
        }
      })
      .catch(function () {
        sending = false;
        submitButton.disabled = false;
        submitButton.textContent = "Send request";
        showAlert("The request was not sent. The inbox did not confirm it. You can try again.");
        if (alertBox) alertBox.focus();
      })
      .finally(function () {
        window.clearTimeout(timer);
      });
  });

  function valueOf(id) {
    var field = document.getElementById(id);
    return field ? String(field.value || "").trim() : "";
  }
})();

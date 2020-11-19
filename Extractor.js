function extract() {
  console.log(document.getElementById("fname").value);

  let firstName = document.getElementById("fname");
  let totalName = "Alexander Ditzens";

  let alpha = totalName.length;
  let beta = (totalName.charCodeAt(0) - 64) / 65;
  let gamma = totalName.length % 2;
  let delta = totalName.charCodeAt(0) % 2;
  let epsilon = totalName.charCodeAt(1) % 2;
  let zeta = totalName.charCodeAt(1) % 2;
  let eta = totalName.charCodeAt(1) % 2;
  let theta = totalName.charCodeAt(1) % 2;
  let iota = totalName.charCodeAt(1) % 2;
  let kappa = totalName.charCodeAt(1) % 2;
  let lambda = totalName.charCodeAt(1) % 2;
  let mu = totalName.charCodeAt(1) % 2;
  let nu = totalName.charCodeAt(1) % 2;
  let xi = totalName.charCodeAt(1) % 2;
  let omicron = totalName.charCodeAt(1) % 2;
  let pi = totalName.charCodeAt(1) % 2;
  let rho = totalName.charCodeAt(1) % 2;
  let sigma = totalName.charCodeAt(1) % 2;
  let tau = totalName.charCodeAt(1) % 2;
  let upsilon = totalName.charCodeAt(1) % 2;
  let phi = totalName.charCodeAt(1) % 2;
  let chi = totalName.charCodeAt(1) % 2;
  let psi = totalName.charCodeAt(1) % 2;
  let omega = totalName.charCodeAt(1) % 2;

  let greeks = {
    alpha,
    beta,
    gamma,
    delta,
    epsilon,
    zeta,
    eta,
    theta,
    iota,
    kappa,
    lambda,
    mu,
    nu,
    xi,
    omicron,
    pi,
    rho,
    sigma,
    tau,
    upsilon,
    phi,
    chi,
    psi,
    omega,
  };

  for (i = 0; i < totalName.length; i++) {
    console.log(i + ")  " + totalName[i] + " #" + totalName.charCodeAt(i));
  }
  console.log(greeks);
  NAME_TRANSLATED = true;
  state = {
    sides: 6,
    stepsOut: 4,
    thinStroke: 3,
    thickStroke: 5,
    ...greeks,
  };
  draw();
}

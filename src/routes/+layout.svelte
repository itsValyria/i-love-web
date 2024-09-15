<script>
  import '../global.css'; // Import the global CSS file
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
</svelte:head>

<header>
  <div class="header__div">
    <h1>i &lt;3 web <span>van eef</span></h1>
    <a class="header__home" href="/">
      <img src="/images/house.png" alt="Home">
    </a>
  </div>
  <nav>
    <ol>
      <li><a href="#sprint13">Sprint 13</a></li>
      <li><a href="#sprint14">Sprint 14</a></li>
      <li><a href="#sprint15">Sprint 15</a></li>
      <li><a href="#sprint16">Sprint 16</a></li>
      <li><a href="#sprint17">Sprint 17</a></li>
      <li><a href="#sprint18">Sprint 18</a></li>
      <li><a href="#sprint19">Sprint 19</a></li>
      <li><a href="#sprint20">Sprint 20</a></li>
    </ol>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
<p>made with &lt;3 <span>by eef</span></p>
<a href="https://eefhaller.com/">eefhaller.com</a>
</footer>

<style>

</style>
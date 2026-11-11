<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Blog</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/pages.css">
</head>

<body>

<header>
    <nav>
        <a href="public-index.html">Mon Blog.</a>

        <ul>
            <li><a href="public-index.html">Accueil</a></li>
            <li><a href="public-categorie.html">Catégories</a></li>
            <li><a href="public-apropos.html">À propos</a></li>
        </ul>

        <a href="admin-login.html">Espace Admin</a>
    </nav>
</header>

<main>

    <section class="hero">
        <h1>Mon Blog Personnel : Développer & Partager</h1>

        <p>
            Découvrez mes derniers articles sur le développement web,
            l'architecture logicielle et les bonnes pratiques d'intégration UI/UX.
        </p>

        <a href="#articles">Lire les articles</a>
        <a href="public-apropos.html">À propos de moi</a>
    </section>

    <section>
        <h2>Explorer par thème</h2>

        <a href="public-index.html">Tous les articles</a>
        <a href="public-categorie.html">Développement</a>
        <a href="public-categorie.html">Design UI/UX</a>
        <a href="public-categorie.html">Productivité</a>
        <a href="public-categorie.html">Management</a>
    </section>

    <section id="articles">

        <h2>Dernières publications</h2>
        <p>Les articles les plus récents de la communauté.</p>

        <div class="grille-articles">

            <?php foreach ($articles as $article): ?>

                <article class="carte-article">

                    <div class="carte-image">
                        <img
                            src="images/<?= htmlspecialchars($article['image']) ?>"
                            alt="<?= htmlspecialchars($article['titre']) ?>"
                        >
                    </div>

                    <div class="carte-contenu">

                        <span class="etiquette-categorie <?php if ($article['categorie_couleur'] == 'bleu'): ?>bleu<?php else: ?>rose<?php endif; ?>">
                            <?= htmlspecialchars($article['categorie_libelle']) ?>
                        </span>

                        <?php if ($article['id'] == 1): ?>
                            <small class="badge-special">⭐ À la une</small>
                        <?php endif; ?>

                        <h3>
                            <a href="public-article.html">
                                <?= htmlspecialchars($article['titre']) ?>
                            </a>
                        </h3>

                        <p>
                            <?= htmlspecialchars($article['contenu']) ?>
                        </p>

                        <div class="carte-meta">
                            <span><?= htmlspecialchars($article['date_creation']) ?></span>
                            <span>5 min</span>
                        </div>

                    </div>

                </article>

            <?php endforeach; ?>

        </div>

    </section>

</main>

<footer>
    <h2>Mon Blog</h2>

    <p>
        Partager des connaissances, des tutoriels et des découvertes
        sur le développement web.
    </p>

    <h3>Navigation</h3>

    <ul>
        <li><a href="public-index.html">Accueil</a></li>
        <li><a href="public-categorie.html">Catégories</a></li>
        <li><a href="public-apropos.html">À propos</a></li>
    </ul>

    <h3>Contact</h3>
    <p>Retrouvez les nouveaux articles chaque semaine.</p>

    <p>© 2026 Mon Blog Personnel.</p>
</footer>

</body>
</html>
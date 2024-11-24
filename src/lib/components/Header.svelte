<style lang="scss">
    nav {
        width: 200px;
        background-color: var(--tdk-primary-color);
        position: fixed;
        height: 100%;
        overflow: auto;

        a {
            display: block;
            padding: var(--tdk-spacing-md);
            text-decoration: none;

            &:hover {
                background-color: var(--tdk-hover-bgcolor);
                color: var(--tdk-hover-color);
            }

            @include respond-to(sm) {
                text-align: center;
                float: none;
            }
        }

        @include respond-to(sm) {
            width: 100%;
            height: auto;
            position: relative;
        }
    }
</style>

<nav>
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
</nav>

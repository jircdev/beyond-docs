<script>
    import {updateCount} from "@beyond/docs/examples-sm-actions";

    let count = 0;
    const add = () => {
        ++count;
        updateCount();
    }
</script>

<div class="list">
    <div class="item" on:click={add}>
        <h3>
            Svelte Panel
        </h3>
        <span>clicks here: {count}</span>
    </div>
</div>

<style lang="scss">
  .item {
    padding: 1rem 2rem;
    cursor: pointer;
    border: 1px solid var(--secondary-dark);
    align-items: center;

    &:hover, &.selected {
      background: rgba(red, .3);
    }
  }
</style>

import './style.scss';

export default function Loading() {
    return (
        <section class="ctnr">
            <div class="ldr">
                <div class="ldr-blk"></div>
                <div class="ldr-blk an_delay"></div>
                <div class="ldr-blk an_delay"></div>
                <div class="ldr-blk"></div>
            </div>
            <span className='mt-4 text-bold load-text'>Processing . . .</span>
        </section>
    )
}
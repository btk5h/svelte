/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	destroy_block,
	detach,
	element,
	empty,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	text,
	update_keyed_each
} from "svelte/internal";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.thing = list[i];
	return child_ctx;
}

// (5:0) {#each things as thing (thing.id)}
function create_each_block(key_1, ctx) {
	var div, t_value = ctx.thing.name + "", t;

	return {
		key: key_1,

		first: null,

		c() {
			div = element("div");
			t = text(t_value);
			this.first = div;
		},

		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},

		p(changed, ctx) {
			if ((changed.things) && t_value !== (t_value = ctx.thing.name + "")) {
				set_data(t, t_value);
			}
		},

		d(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

function create_fragment(ctx) {
	var each_blocks = [], each_1_lookup = new Map(), each_1_anchor;

	let each_value = ctx.things;

	const get_key = ctx => ctx.thing.id;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},

		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},

		p(changed, ctx) {
			const each_value = ctx.things;
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, destroy_block, create_each_block, each_1_anchor, get_each_context);
		},

		i: noop,
		o: noop,

		d(detaching) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) {
				detach(each_1_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { things } = $$props;

	$$self.$set = $$props => {
		if ('things' in $$props) $$invalidate('things', things = $$props.things);
	};

	return { things };
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["things"]);
	}
}

export default Component;
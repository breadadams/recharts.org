export default {
  name: 'Pie',
  props: [
    {
      name: 'cx',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: 'The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container height.',
    }, {
      name: 'cy',
      type: 'Percentage | Number',
      defaultVal: '\'50%\'',
      isOptional: false,
      desc: 'The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container height.',
    }, {
      name: 'innerRadius',
      type: 'Percentage | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The inner radius of all the sectors. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'outerRadius',
      type: 'Percentage | Number',
      defaultVal: '\'80%\'',
      isOptional: false,
      desc: 'The outer radius of all the sectors. If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.',
    }, {
      name: 'startAngle',
      type: 'Number',
      defaultVal: 0,
      isOptional: false,
      desc: 'The start angle of first sector.',
    }, {
      name: 'endAngle',
      type: 'Number',
      defaultVal: 360,
      isOptional: false,
      desc: 'The end angle of last sector, which should be unequal to startAngle.',
    }, {
      name: 'minAngle',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The minimum angle of each unzero data.',
    }, {
      name: 'nameKey',
      type: 'String',
      defaultVal: '\'name\'',
      isOptional: false,
      desc: "The key of each sector's name.",
    }, {
      name: 'valueKey',
      type: 'String',
      defaultVal: '\'value\'',
      isOptional: false,
      desc: "The key of each sector's value.",
    }, {
      name: 'legendType',
      type: 'String',
      defaultVal: '\'rect\'',
      isOptional: false,
      desc: 'The type of icon in legend, which can be \'line\', \'scatter\', \'square\', \'rect\'.',
    }, {
      name: 'label',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If false set, labels will not be drawed. If true set, labels will be drawed which have the props calculated internally. If object set, labels will be drawed which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element.',
    }, {
      name: 'data',
      type: 'Array',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The source data which each element is an object.',
    }, {
      name: 'isAnimationActive',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, animation of line will be disabled.',
    }, {
      name: 'animationBegin',
      type: 'Number',
      defaultVal: '400',
      isOptional: false,
      desc: 'Defines when the animation should begin.',
    }, {
      name: 'animationDuration',
      type: 'Number',
      defaultVal: '1500',
      isOptional: false,
      desc: 'Specifies the duration of animation, the unit of this option is ms.',
    }, {
      name: 'animationEasing',
      type: `'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear' | Function`,
      defaultVal: `'ease'`,
      isOptional: false,
      desc: 'The type of easing function or a customized ease function.',
    },
  ],
  examples: [
  ]
};

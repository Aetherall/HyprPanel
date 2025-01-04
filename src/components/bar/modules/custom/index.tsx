import options from 'src/options';
import { Module } from '../../shared/Module';
import { inputHandler } from 'src/components/bar/utils/helpers';
import { bind } from 'astal';
import { BarBoxChild } from 'src/lib/types/bar';
import { Astal } from 'astal/gtk3';

type CustomOptions =
    typeof options.bar.customModules.custom1 &
    typeof options.bar.customModules.custom2 &
    typeof options.bar.customModules.custom3 &
    typeof options.bar.customModules.custom4

export const Custom = (o: CustomOptions): BarBoxChild => Module({
    textIcon: bind(o.icon),
    label: bind(o.label),
    boxClass: 'custom',
    showLabelBinding: bind(o.showLabel),
    props: {
        setup: (self: Astal.Button) => {
            inputHandler(self, {
                onPrimaryClick: {
                    cmd: o.leftClick,
                },
                onSecondaryClick: {
                    cmd: o.rightClick,
                },
                onMiddleClick: {
                    cmd: o.middleClick,
                },
                onScrollUp: {
                    cmd: o.scrollUp,
                },
                onScrollDown: {
                    cmd: o.scrollDown,
                },
            });
        },
    },
})
